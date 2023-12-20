import Header from '../Header/Header';

type UserInfoPropsTypes = {
	userData: {
		name: string;
		username: string;
		email: string;
		website?: string;
		phone?: string;
		id: number;
	};
};

const UserInfo = ({ userData }: UserInfoPropsTypes) => {
	return (
		<div className="border-2 border-gray-300 shadow-lg rounded-md px-4 pb-4 mt-10 max-w-4xl mx-auto ">
			<Header title={userData.name} subTitle={`Username :  ${userData.username} `} />
			<table className="border-collapse border border-slate-200 mt-5 w-full">
				<tr>
					<td className="border border-slate-300 p-4">
						Username : {userData.username}
					</td>
				</tr>
				<tr>
					<td className="border border-slate-300 p-4">
						Email : {userData.email}
					</td>
				</tr>
				<tr>
					<td className="border border-slate-300 p-4">
						Site Web : {userData.website}
					</td>
				</tr>
				<tr>
					<td className="border border-slate-300 p-4">
						Télephone : {userData.phone}
					</td>
				</tr>
			</table>
		</div>
	);
};
export default UserInfo;
