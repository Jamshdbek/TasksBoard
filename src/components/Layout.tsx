import {Outlet , Link} from "react-router-dom"
function Layout() {
  return (
    <div className='header'>
        <Link to="/" >Main</Link>
        <Link to='row'>Rows</Link>
        <Outlet/>
    </div>
  )
}

export default Layout