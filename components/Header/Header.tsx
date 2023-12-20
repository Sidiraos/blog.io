type HeaderPropsType = {
    title: string
    subTitle: string
}

const Header = ({title , subTitle} : HeaderPropsType) => {
  return (
    <header className="mt-10">
      <h1 className="text-3xl font-bold">
        {title}
      </h1>
      <p className="text-gray-600 text-xl">{subTitle}</p>
    </header>
  )
}
export default Header