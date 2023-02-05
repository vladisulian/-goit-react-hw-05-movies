import './Layout.css';
import './Base.css';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav className="navigation">
          <NavLink to={''} end>
            Home
          </NavLink>
          <NavLink to={'movies'}>Movies</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};
