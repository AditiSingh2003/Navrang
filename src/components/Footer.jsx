import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor={"pink"}>
      <Box display={"flex"}>
        <Box ml={6} display={"flex"} pt={"60px"}>
          <Image src="" height={"50px"}></Image>
          <Box textAlign={"left"}>
            <Text ml={2}>
              <strong>NARVRANG</strong>
            </Text>
            <Text ml={2} pb={"60px"}>
              {" "}
              The Cultural Colour of PSIT.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} mb={19}>
        <Box ml={85} display={"flex"}>
          <Box textAlign={"left"}>
            <Heading fontSize={20}>Contact</Heading>
            <Text pt={7}>Faculty Head</Text>
            <Text>jlkdjljlkjdlkfsdsfd</Text>
            <Text pt={7}>For any queries : </Text>
            <Text>123-456-7890</Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          
          pt={"50px"}
          pb={"60px"}
        >
          <Box ml={85} display={"flex"}>
            <Box textAlign={"left"}>
              <Text>Contact email: </Text>
              <a href="https://mail.google.com/" target="_blank">
                <Text _hover={{ color: "black" }}>info@mysite.com</Text>
              </a>
              <Text pt={7}>Technical Head: </Text>
              <a href="https://mail.google.com/" target={"_blank"}>
                <Text _hover={{ color: "black" }}>978794879554</Text>
              </a>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"}  pb={"60px"}>
          <Box ml={100} display={"flex"}>
            <Box textAlign={"left"}>
              
            </Box>
          </Box>
        </Box>

        <Box display={"flex"}  pb={"60px"}>
          <Box ml={100} display={"flex"}>
            <Box textAlign={"left"}>
              <Heading fontSize={20}>Follow</Heading>
              <Text pt={7}>Join us to get latest Updates</Text>
              <br />

              {/* button */}
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} pb={"60px"}>
          <Box ml={"20"} display={"flex"} mr={"60px"}>
            <Box textAlign={"left"}>
              <a href="https://www.linkedin.com/" target={"_blank"}>
                <Heading fontSize={20} _hover={{ color: "black" }}>
                  Instagram
                </Heading>
              </a>
              <br />
              <a href="https://www.facebook.com/" target={"_blank"}>
                <Heading fontSize={20} _hover={{ color: "black" }}>
                  Facebook
                </Heading>
              </a>
              <br />
              <a href="https://www.youtube.com/" target={"_blank"}>
                <Heading fontSize={20} _hover={{ color: "black" }}>
                  YouTube
                </Heading>
              </a>
              <br />
            </Box>
          </Box>
        </Box>
      </Box>
    
    </Box>
  );

  
};

export default Footer;