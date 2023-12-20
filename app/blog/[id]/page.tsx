import { Metadata } from 'next';

export const dynamicParams = false;

export const metadata: Metadata = {
    title: 'Code.io-Blog',
	description: 'articles des developpeurs',
};

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

const Page = async ({ params } : {params : {id : string}}) => {
    const post = await getPost(params.id);
    console.log(post);
    metadata.title = post.title;
    metadata.description = post.body;
	return (
        <section>
            <h1 className='text-3xl font-medium text-slate-800 text-center mt-10'>{post.title}</h1>
            <p className='text-slate-700 mt-10 text-center'>{post.body}</p>
        </section>   
    )
};
export default Page;
