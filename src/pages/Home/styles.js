import { Link } from 'react-router-dom';

import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RepositoryContainer = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  max-width: 80rem;
  width: 100%;
  min-height: 20rem;
  background: ${colors.primaryDark};
  justify-content: space-between;
  padding: 2.2rem;
  margin-bottom: 2rem;
  &:nth-of-type(30) {
    margin-bottom: 10rem;
  }
`;

export const RepositoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  word-break: break-all;

  h2 {
    color: ${colors.primary};
    margin-bottom: 1rem;
  }
  p {
    color: ${colors.gray};
    font-size: 1.6rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.secondary};
  font-size: 2rem;
  svg {
    margin-right: 0.5rem;
  }
  small:first-of-type {
    margin-right: 0.5rem;
  }
`;
export const Author = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  align-items: center;
  width: 300px;
  strong {
    color: ${colors.primary};
    font-size: 1.4rem;
  }
  small {
    color: ${colors.gray};
    font-size: 1.2rem;
  }
`;
export const Avatar = styled.img`
  border: 2px solid ${colors.secondary};
  height: 8rem;
  width: 8rem;
  background: ${colors.black};
  border-radius: 50%;
  margin-bottom: 1rem;
`;
