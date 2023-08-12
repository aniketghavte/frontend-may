import NextAuth from "next-auth"
import axios from "axios";
import GoogleProvider from "next-auth/providers/google";

const createUser = async (session) => {
    console.log("user form auth" , session);
    await axios.post('https://www.actualone.xyz/api/waitlist/register', {
      email: session?.token?.email,
      name: session?.token?.name,
      username: ""
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data); // This will log the response body containing the error message
      } else {
        console.log(error); // Fallback to logging the entire error object if response data is not available
      }
    });
}  
console.log(process.env.GOOGLE_CLIENT_ID)
export const authOptions = {
  // Configure one or more authentication providers


  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
      })
  ],

  callbacks: {
    async session(session) {
      // Perform actions with the user session
      // For example, make an API call to your backend server
      await createUser( session); // Call your backend API function
      
      return session;
    },
  },

  secret: process.env.AUTH_SECRET
}

export default NextAuth(authOptions)