import { GoBackBtn } from './GoBackButton.styled';

export const GoBack = ({ path }) => {
  return <GoBackBtn to={path}>Go back</GoBackBtn>;
};
