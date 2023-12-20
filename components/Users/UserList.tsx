import Link from "next/link"
type UserListProps = {
    name : string
    id : number
}

const UserList = ({name , id} : UserListProps) => {
  return (
    <div className="border border-gray-400 flex justify-between mt-10 p-5 rounded-md max-w-2xl mx-auto">
      <p className="font-medium text-slate-900 text-xl" >{name}</p>
      <Link href={`liste/${id}`} className="text-blue-600 underline hover:text-blue-800">Contacter</Link>
    </div>
  )
}
export default UserList