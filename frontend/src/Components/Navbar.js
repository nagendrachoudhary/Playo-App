import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <Box bg={'lightgray'} width={'100%'} height={'50px'} position={'sticky'} alignItems={'center'} display={'flex'} justifyContent={'space-between'} top={'0'} right={'0'}>
            <Box>
              <Image w={'100px'} h={'40px'} src='https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2FLogo%2Bwith%2BTrademark_Filled.png%3Fq%3D20%26format%3Dauto&w=1920&q=75'/>
            </Box>
            <Box alignItems={'center'} display={'flex'} gap={'30px'} pr={'30px'}>
               <Link to={'/'}>Home</Link>
               <Link to={'/login'}>Login</Link>
            </Box>
        </Box>
    );
}

export default Navbar;