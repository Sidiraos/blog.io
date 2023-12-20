type ContainerPropTypes = {
    children : React.ReactNode
}
const Container = ({children} : ContainerPropTypes) => {
  return (
    <main className="max-w-4xl p-4 sm:p-10 mx-auto">
            {children}
    </main>
  )
}
export default Container