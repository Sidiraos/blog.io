import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Section from '@/components/Section/Section';
import Article from '@/components/Article/Article';
import limitLengthOfText from '@/utils/limitLengthOfText';

type ArticleType = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export const metadata: Metadata = {
	title: 'Code.io-Blog',
	description: 'articles des developpeurs',
};

 async function getArticleData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	if (!res.ok) throw new Error('Error while fetching data');
	const data = await res.json();
	return data;
}

const Page = async () => {
	const articleData: ArticleType[] = await getArticleData();
	// console.log(articleData);
	return (
		<section>
			<Header
				title="Bienvenue sur le Blog."
				subTitle="Voici les articles"
			/>
			<Section>
				{articleData.map(
					(
						article: ArticleType,
						index?: number,
						array?: ArticleType[]
					) => (
						<Article
							key={article.id}
							title={article.title}
							subTitle={limitLengthOfText(article.body, 30)}
							body={article.body}
							id={article.id}
							link={`blog/${article.id}`}
							textLink={'lisez cet article'}
						/>
					)
				)}
			</Section>
		</section>
	);
};
export default Page;
