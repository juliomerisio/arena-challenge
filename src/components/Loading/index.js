import React from 'react';
import { IoLogoGithub } from 'react-icons/io';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <IoLogoGithub
        data-testid="loading"
        size={60}
        className="animated infinite pulse delay-0s"
      />
    </Container>
  );
}
