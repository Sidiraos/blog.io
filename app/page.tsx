import Header from '@/components/Header/Header';
import Article from '@/components/Article/Article';
import Section from '@/components/Section/Section';
export default function Home() {
	return (
		<section>
			<Header
				title="Bienvenue sur Code.io"
				subTitle="Le blog communautaire des développeurs"
			/>
			<Section>
				<Article
					title="Lisez les articles"
					subTitle="Maximisez votre culture web"
					paragraph="Chaque auteur tente de vous apporter le plus de valeur possible par article"
					link="blog"
					textLink="Visiter le blog"
				/>
				<Article
					title="Faites un tour vers la liste de membres"
					subTitle="Faites-vous des amis"
					paragraph="Ajoutez , invitez et discutez avec les différents membres."
					link="liste"
					textLink="Découvre la liste de membres"
				/>
			</Section>
		</section>
	);
}
