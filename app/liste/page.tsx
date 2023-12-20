import { Metadata } from 'next';
import UserList from '@/components/Users/UserList';

export const metadata: Metadata = {
	title: 'Liste des membres de Code-io',
	description:
		'Liste des membres de Code-io qui se sont inscrits et participé au developpement du site',
};

import Header from '@/components/Header/Header';

 async function getUsersData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	if (!res.ok) throw new Error('Error while fetching data');
	const data = await res.json();
	return data;
}

export default async function Page() {
    const data = await getUsersData();
    const users = data.map((user : any) => {
        return {
            id: user.id,
            username: user.username,
            name : user.name,
            email: user.email,
            website : user.website,
            phone : user.phone
            
        }
    });
	return (
		<section className='text-center'>
			<Header
				title="Liste des utilisateurs de Code.io"
				subTitle="Liste des membres de Code.io qui se sont inscrits et participé au developpement du site"
			/>
                {
                    users.map((user : any) => <UserList key={user.id} name={user.username} id={user.id} />)
                }

		</section>
	);
}
