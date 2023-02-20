import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

export default function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box>
      <Box display={"flex"} flexDirection={"row"} className="landing-page">
        <Box className="left-half" width={["100%", "", "", "50%"]}>
          <Box
            className="page-heading"
            fontSize={["md", "", "3xl"]}
            m={["", "", "10", "10"]}
            mb={"0"}
            p={["10", "", "10", "10"]}
          >
            <Text>Navrang</Text>
            <Text mb={100}>The Cultural Color Of PSIT</Text>

            <Box className="page-content" >
              <Text fontSize={["", "", "md"]} m="4" ml={"0"} mb={100}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
              </Text>
              <Button
                bgColor={"black"}
                color="#fff"
                mt={"8"}
                _hover={{ bgColor: "rgba(0, 0, 0, 0.64)" }}
              >
              Know More
              </Button>
            </Box>
          </Box>

          
        </Box>

        <Box
          className="right-half"
          width={"50%"}
          display="flex"
          flexDirection={"column"}
        >
          <Box display={"flex"} justifyContent="center" alignContent={"center"} width={'500px'}>
            <Image
              src="/NAVRANG2.png"
              boxSize={'xl'}
              m={["", "", "10", "10"]}
              p={["", "", "10", "10"]}
            />
          </Box>
          <Box display={["none", "", "flex"]} justifyContent="flex-end">
            <Box
              m={["", "", "10", "10"]}
              bgColor="#E5D1FA"
              p={"3"}
              borderRadius="full"
              position={"fixed"}
              _hover={{ cursor: "pointer"}}
            >
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Contact Us</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Your name</FormLabel>
                      <Input ref={initialRef} placeholder="Full name" />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Your Message</FormLabel>
                      <Input placeholder="Enter your Message" size={"lg"} />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                      Submit
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={["column", "row", "row", "row"]}
        className="second-half"
        width={"100%"}
        bgColor="#E5D1FA"
      >
        <Box
          fontSize={"3xl"}
          p={["12", "24", "24", "24"]}
          pl={["", "", "20", "20"]}
        >
          <Text>Club Ambassador Message </Text>
        </Box>

        <Box p={["12", "24", "24", "24"]}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            doloremque quisquam vitae officia, porro reprehenderit maiores aut
            ex cumque necessitatibus at commodi consectetur sed amet unde totam
            distinctio fuga libero!
          </Text>
        </Box>
      </Box>
    </Box>
  );
}