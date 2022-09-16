import React from 'react';
import Stack from '@mui/material/Stack';
import TeamRole from './TeamRole';
import TeamDesc from './TeamDesc';
import exec1 from '../assets/yhmflogo.png';

const TeamBlock = () => {
    return (
      <Stack alignItems="center" spacing={8}>
        <Stack alignItems="center">
          <TeamRole role="President"/>
          <TeamDesc name="Danny Yang" email="yyfdanny1028@gmail.com" cell="778-322-1028" image={exec1}/>
        </Stack>

        <Stack alignItems="center">
          <TeamRole role="Vice-President"/>
          <TeamDesc name="Raymond Zou" email="raymondzou0101@gmail.com" cell="778-552-0298" image={exec1}/>
        </Stack>

        <Stack alignItems="center">
          <TeamRole role="Outreach Executives and Tech Executive"/>
          <TeamDesc name="Alex Guo (Outreach and Tech Executive)" email="alexlguo18@gmail.com" cell="778-899-8928" image={exec1}/>
          <TeamDesc name="William Yang" email="238557274william@gmail.com" cell="778-927-7026" image={exec1}/>
        </Stack>

        <Stack alignItems="center">
          <TeamRole role="Media Executives"/>
          <TeamDesc name="Lucy Wang" email="lucyw0628@gmail.com" cell="778-554-0628" image={exec1}/>
          <TeamDesc name="Sophia Xu" email="sophialcx88@gmail.com" cell="778-288-2056" image={exec1}/>
        </Stack>

        <Stack alignItems="center">
          <TeamRole role="Event Executives"/>
          <TeamDesc name="Amy Zhang" email="amyzhangzyh@gmail.com" cell="604-710-5958" image={exec1}/>
          <TeamDesc name="Fiona Nie" email="jiayinie2005@gmail.com" cell="778-964-0429" image={exec1}/>
          <TeamDesc name="Chungai Yu" email="chungaiyu15@gmail.com" cell="778-979-0231" image={exec1}/>
        </Stack>
      </Stack>
    );
}

export default TeamBlock;