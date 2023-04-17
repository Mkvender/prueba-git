import { Outlet,Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <h1>DEMO Streaming</h1>

        <p>Log in</p>
        <button>Start your free trial</button>

      </nav>
        <div><Link to="/">Home</Link> </div>
        <div><Link to="/pelis">Peliculas</Link></div>
        <div><Link to="/series">Series</Link></div>
        <Outlet />
            
    </>
  )
};

export default Layout;