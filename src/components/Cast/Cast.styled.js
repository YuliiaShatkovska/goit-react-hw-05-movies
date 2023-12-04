import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
`;

export const CastItem = styled.li`
  width: calc((100% - 40px) / 3);
`;

export const CastHeading = styled.h3`
  color: #f2d2a9;
  margin-top: 20px;
`;

export const CastText = styled.p`
  color: #87ebdf;
`;
