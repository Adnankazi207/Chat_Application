import React, { useEffect } from "react";
import { Box, Container, Text, Tab,TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup";
import Login from "../components/Authentication/Login";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
 
  const navigate = useNavigate();
   
  useEffect (() => {
         const user = JSON.parse(localStorage.getItem("userInfo"));
         
         if(user) navigate("/chats");
      },[navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          Chat Buddy
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color='black' marginBottom='40px'>
        <Tabs variant="soft-rounded" colorScheme='gray'>
          <TabList mb='1em'>
            <Tab width='50%'>Login</Tab>
            <Tab width='50%'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
               <Login/>
            </TabPanel>
            <TabPanel>
               <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;

