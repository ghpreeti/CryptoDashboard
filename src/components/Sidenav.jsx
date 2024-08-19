import { HStack, Stack ,Icon,Text, Heading, Box} from '@chakra-ui/react';
import React from 'react'
import {RxDashboard} from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
    icon:RxDashboard ,
    text:"Dashboard",
    link :"/",
    },
    {
        icon:TbArrowsDoubleNeSw,
        text:"Transactions",
        link :"/transactions",
    },

  ]

  return (
    <Stack bg="white"
    justify="space-between"
    boxShadow={{
      base: "none",
      lg: "lg",
    }}
    w={{
      base: "full",
      lg: "16rem",
    }}
    h="100vh">
       <Box>
       <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">@CryptoView</Heading>
        
        <Box mt="6" mx="3">
        {navLinks.map((nav) => (
             <HStack borderRadius="10px" py="3" px="4" key={nav.text}  _hover={{
                 bg: "#F3F3F7",
                 color: "#171717",
               }}
               color="#797E82">
                 <Icon as={nav.icon}/>
                 <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
             </HStack>
         ))}
        </Box >
       </Box>

       <Box mt="6" mx="3" mb="6">
       <HStack borderRadius="10px" py="3" px="4" _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              >
                <Icon as={BiSupport}/>
                <Text fontSize="14px" fontWeight="medium">Support
                </Text>
            </HStack>
       </Box>
    </Stack>
);
};

export default Sidenav;
