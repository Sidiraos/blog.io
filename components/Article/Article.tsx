import Link from 'next/link';

type ArticleTypes = {
	title: string;
	subTitle: string;
	link: string;
	textLink: string;
};
type OptionalArticleTypes = {
	paragraph?: string;
	body?: string;
	id?: number;
	userId?: number;
};

type ArticlePropsTypes = ArticleTypes & OptionalArticleTypes;
const Article = ({
	title,
	subTitle,
	paragraph,
	link,
	textLink,
}: ArticlePropsTypes) => {
  
	return (
		<article className="border-2 border-gray-300 shadow-lg rounded-md p-4 flex flex-col justify-between">
			<div className=''>
				<h2 className="text-xl font-bold ">{title}</h2>
				<h4 className="text-sm  text-gray-500 font-semibold sm:text-base">
					{subTitle}
				</h4>
				<p className="mb-5 mt-2">{paragraph}</p>
			</div>
			<Link href={`/${link}`} className="text-blue-600 underline">
				{textLink}
			</Link>
		</article>
	);
};
export default Article;
