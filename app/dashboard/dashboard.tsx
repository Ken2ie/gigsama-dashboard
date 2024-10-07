import NavBar from "./components/nav-bar"


export default function Dashboard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard-layout">
      <NavBar />
      <div className="dashboard-content">
        <main>{children}</main>
      </div>
    </div>
  )
}