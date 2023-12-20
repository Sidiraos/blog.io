
type MainPropsTypes = {
    children: React.ReactNode
}
const Section = ({children} : MainPropsTypes) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] grid-rows-[250px, auto] gap-10 mt-20" >
            {children}
    </section>
  )
}
export default Section