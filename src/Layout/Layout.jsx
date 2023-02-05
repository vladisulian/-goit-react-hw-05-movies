import './Layout.css';
import './Base.css';
import { Suspense } from 'react';
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
        <Suspense fallback={<h4>Please, wait a bit. Loading...</h4>}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};
