import NextAuth from "next-auth"
import axios from "axios";
import GoogleProvider from "next-auth/providers/google";

const createUser = (session) => {
    console.log("user form auth" , session);
    axios.post('https://xy2s9f3v4f.execute-api.ap-south-1.amazonaws.com/dev/api/waitlist/register', {
      email: session?.token?.email,
      name: session?.token?.name
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
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