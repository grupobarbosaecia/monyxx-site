import React from 'react';
import { Box } from '@chakra-ui/react';
import  Header from '../../components/Header/header'

const Home: React.FC = () => {
    return (
        <Box bg={"monyxxColors.100"} h={"100vh"} w={"100%"}>
          <Header/>
        </Box> 
      );
    }

export default Home;