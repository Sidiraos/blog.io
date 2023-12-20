
type MainPropsTypes = {
    children: React.ReactNode
}
const Section = ({children} : MainPropsTypes) => {
  return (
    <section className="grid sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] grid-rows-[auto] gap-10 mt-20" >
            {children}
    </section>
  )
}
export default Section