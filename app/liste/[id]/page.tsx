import type { Metadata, ResolvingMetadata } from 'next'
import UserInfo from "@/components/Users/UserInfo";
export const dynamicParams = false;

type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
  // fetch data
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())
  return {
    title: user.username,
    description : `detail de l'utilisateur ${user.username}`
  }
}

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

const Page = async ({ params } : Props) => {
  const user = await getDataUser(params.id);
    // console.log(user);

    const userData : UserType = {
        id: user.id,
        username: user.username,
        name : user.name,
        email: user.email,
        website : user.website,
        phone : user.phone
    }
  return (
    <UserInfo userData = {userData} />
  )
}
export default Page