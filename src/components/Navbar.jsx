import {
    Box,
    Button,
    ListItem,
    Text,
    UnorderedList,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Flex,
    Image,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import React from "react";
//   import { Link } from "react-router-dom";
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <Box>
        <Box
          justifyContent={"space-between"}
          className="navbar-lg"
          display={["none", "none", "flex", "flex"]}
        >
          <UnorderedList
            listStyleType={"none"}
            display={"flex"}
            className="navbar-ul"
          >
          <ListItem p={"2"}>
            <Image boxSize={"12"} src="public/NAVRANG2.png" />
          </ListItem>
            <ListItem p={"2"} px={"0"} className="navbar-li">
              
                <Text as={"b"} fontSize={"x-large"}>
                 Navrang
                </Text>
             
            </ListItem>
          </UnorderedList>
          <UnorderedList
            listStyleType={"none"}
            display={"flex"}
            className="navbar-ul"
          >
            
              <li className="navbar-li">Events</li>
            
            
              <li className="navbar-li">About Us</li>
           
              <li className="navbar-li">Missions</li>
          
              
            <ListItem p={"3"}>
              <Button
                bgColor={"#FFBF23"}
                color={"white"}
                size={"sm"}
                variant={"ghost"}
                _hover={{ bgColor: "#FFD369" }}
              >
                JOIN
              </Button>
            </ListItem>
            
          </UnorderedList>
        </Box>
  
        <Box
          className="nav-drawer"
          display={["flex", "flex", "none", "none"]}
          justifyContent={"space-between"}
        >
          <Flex m={"1"}>
       
              <Text as={"b"} fontSize={"x-large"} className={"navbar-ul"}>
                Navrang
              </Text>
            
          </Flex>
          <Flex m={"1"}>
            <Button>
              <HamburgerIcon ref={btnRef} onClick={onOpen} />
            </Button>
    
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Navrang</DrawerHeader>
  
                <DrawerBody p={"0"}>
                  <UnorderedList
                    listStyleType={"none"}
                    className="navbar-ul"
                    textAlign={"center"}
                    onClick={onClose}
                  >
                    
                      <li className="drawer-li">Events</li>
                  
                      <li className="drawer-li">About Us</li>
                   
                      <li className="drawer-li">Missions</li>
                   
                 
                      <Button
                        bgColor={"#FFBF23"}
                        color={"white"}
                        size={"sm"}
                        variant={"ghost"}
                        _hover={{ bgColor: "#FFD369" }}
                      >
                        JOIN
                      </Button>
                    
                  </UnorderedList>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Box>
      </Box>
    );
  }