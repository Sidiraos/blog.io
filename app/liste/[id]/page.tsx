import { Metadata } from "next";
import UserInfo from "@/components/Users/UserInfo";
export const dynamicParams = false;

export const metadata: Metadata = {
    title: 'Details de',
	description: 'Details des utilisateurs de Code.io',
};

type UserType  = {
    id: number;
    username: string;
    name : string;
    email: string;
    website?: string;
    phone?: string;
}

export async function generateStaticParams() {
  const users = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  .then((res) => {
      if(!res.ok) {
          throw new Error('Failed to fetch data');
      }
      return res.json();
  })

 
  return users.map((post : {id : string}) => ({ id: post.id.toString()}))
}
 

async function getDataUser(id : string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const post = await res.json()
  return post
}

const Page = async ({ params } : {params : {id : string}}) => {
  const user = await getDataUser(params.id);
    console.log(user);

    const userData : UserType = {
        id: user.id,
        username: user.username,
        name : user.name,
        email: user.email,
        website : user.website,
        phone : user.phone
    }
    metadata.title = `Detail de ${user.username}`;
  return (
    <UserInfo userData = {userData} />
  )
}
export default Page