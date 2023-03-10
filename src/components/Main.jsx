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

            <Box className="page-content">
              <Text fontSize={["", "", "md"]} m="4" ml={"0"} mb={100}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium
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
          <Box
            display={"flex"}
            justifyContent="center"
            alignContent={"center"}
            width={"500px"}
          >
            <Image
              boxShadow={
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
              }
              src="/banner.png"
              borderRadius={"3xl"}
              ml={"44"}
            />
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

          <Text>Campus Ambassador</Text>
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
