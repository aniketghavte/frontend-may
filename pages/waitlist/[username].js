import { useRouter } from 'next/router';
 
export default function Page() {
  const router = useRouter();
  return <div>
        Post: {router.query.username}
    
    </div>;
}