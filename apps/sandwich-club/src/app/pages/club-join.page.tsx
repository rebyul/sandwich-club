import { Box, Container } from '@mui/material';
import { ClubJoin } from '@sandwich-club/account';
import React from 'react';

export default function ClubJoinPage() {
  return (
    <Container>
      <Box mt={5}>
        <ClubJoin />
      </Box>
    </Container>
  );
}
