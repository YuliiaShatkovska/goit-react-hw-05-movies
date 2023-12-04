import { Suspense } from 'react';
import { HeaderLink, LinkWrap, NavBar } from './Header.styled';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavBar>
        <LinkWrap>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </LinkWrap>
      </NavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
