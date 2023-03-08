import React from 'react';
import Stack from '@mui/material/Stack';
import TeamRole from './TeamRole';
import TeamDesc from './TeamDesc';
import exec3 from '../assets/me.jpg';

const TeamBlock = () => {
    return (
      <Stack alignItems="center" spacing={10}>
        <Stack alignItems="center" spacing={5}>
          <TeamRole role="President"/>
          <TeamDesc name="Danny Yang" email="yyfdanny1028@gmail.com" cell="778-322-1028" image={exec3}/>
        </Stack>

        <Stack alignItems="center" spacing={5}>
          <TeamRole role="Vice-President"/>
          <TeamDesc name="Raymond Zou" email="raymondzou0101@gmail.com" cell="778-552-0298" image={exec3}/>
        </Stack>

        <Stack alignItems="center" spacing={5}>
          <TeamRole role="Outreach Executives and Tech Executive"/>
          <TeamDesc name="Alex Guo (Outreach and Tech Executive)" email="alexlguo18@gmail.com" cell="778-899-8928" image={exec3}/>
          <TeamDesc name="William Yang" email="238557274william@gmail.com" cell="778-927-7026" image={exec3}/>
        </Stack>

        <Stack alignItems="center" spacing={5}>
          <TeamRole role="Media Executive"/>
          <TeamDesc name="Lucy Wang" email="lucyw0628@gmail.com" cell="778-554-0628" image={exec3}/>
        </Stack>

        <Stack alignItems="center" spacing={5}>
          <TeamRole role="Event Executive"/>
          <TeamDesc name="Sophia Xu" email="sophialcx88@gmail.com" cell="778-288-2056" image={exec3}/>
        </Stack>

        <Stack alignItems="center" spacing={5}>
          <TeamRole role="Finance Executive"/>
          <TeamDesc name="Tracy Ye" email="tracy.ye2006@gmail.com" cell="778-318-7587" image={exec3}/>
        </Stack>
      </Stack>
    );
}

export default TeamBlock;