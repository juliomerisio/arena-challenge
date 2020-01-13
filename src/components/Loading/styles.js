import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100vh;
  color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    animation-duration: 1s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
  }
`;
