'use client'

import { styled } from '../styles/stitches.config';

const Button = styled('button', {
  backgroundColor: '$evermore',
  cursor: 'pointer',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',
});

export default function Home() {
  return (
    <Button>TESTANDO</Button>
  );
}
