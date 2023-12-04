import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: 25px;
  color: #87ebdf;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1240px;
  margin: 0 auto;
`;

export const MovieDetailsList = styled.ul`
  margin-top: 50px;
  display: flex;
  gap: 15px;
  justify-content: center;
`;

export const MovieDetailsLink = styled(NavLink)`
  padding: 6px;
  border-radius: 7px;
  box-shadow: 5px 2px 8px #f2d2a9;
  color: #87ebdf;
`;
