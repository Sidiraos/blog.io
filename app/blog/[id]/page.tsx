import type { Metadata, ResolvingMetadata } from 'next'

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
  const article = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
  return {
    title: article.title,
    description : article.body
  }
}
 

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((res) => {
        if(!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    })

    // console.log(posts.map((post : {id : string}) => ({ id: post.id.toString()})));
   
    return posts.map((post : {id : string}) => ({ id: post.id.toString()}))
  }
   
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  async function getPost(id : string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return post
  }

const Page = async ({ params } : Props) => {
    const post = await getPost(params.id);
    // console.log(post);
	return (
        <section>
            <h1 className='text-3xl font-medium text-slate-800 text-center mt-10'>{post.title}</h1>
            <p className='text-slate-700 mt-10 text-center'>{post.body}</p>
        </section>   
    )
};
export default Page;
