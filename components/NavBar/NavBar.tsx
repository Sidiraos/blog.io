import Link from 'next/link'

type NavBarTypesProps = {
    font : string
}
const NavBar = ({font} : NavBarTypesProps) => {
  return (
    <nav className='bg-blue-700 py-4 text-slate-50 text-lg' style={{fontFamily : font}}>
        <ul className='flex justify-center items-center gap-8'>
            <li>
                <Link href='/' className='hover:text-slate-300 tracking-wider'>
                    Acceuil
                </Link>
            </li>
            <li>
                <Link href='/blog' className='hover:text-slate-300 tracking-wider'>
                    Blog
                </Link>
            </li>
            <li>
                <Link href='/liste' className='hover:text-slate-300 tracking-wider'>
                    Liste
                </Link>
            </li>
        </ul>
    </nav>
  )
}
export default NavBar