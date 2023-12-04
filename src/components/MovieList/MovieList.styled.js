import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  box-shadow: 3px 3px 5px #87ebdf;
  width: calc((100% - 60px) / 4);
  display: flex;
  justify-content: center;

  &:hover,
  &:focus {
    box-shadow: 3px 3px 5px #f2d2a9;
  }
`;

export const MovieText = styled.p`
  padding-left: 5px;
  margin-top: 10px;
  color: #87ebdf;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MovieImg = styled.img`
  width: 300px;
`;
