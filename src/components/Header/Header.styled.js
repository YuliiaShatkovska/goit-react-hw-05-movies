import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  background-color: #f2d2a9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 30px;
`;

export const HeaderLink = styled(NavLink)`
  box-shadow: 5px 2px 8px black;
  border-radius: 7px;
  padding: 6px;

  &:hover,
  &:focus,
  &.active {
    background-color: #5a5a5a;
    color: #f2d2a9;
  }
  /* border: 1px solid black; */
`;

// export const Container = styled.div`
//   padding-left: 20px;
//   padding-right: 20px;
//   max-width: 1240px;
//   margin: 0 auto;
// `;

export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 15px;
`;
