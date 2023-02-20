import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Table,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React from "react";

export default function Events() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <SimpleGrid p={"10"} m={"10"} spacing={4} columns={3}>
        <DanceCard />
        <TheatreCard />
        <SingingCard />
      </SimpleGrid>
    </Box>
  );
}

const TheatreCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Card variant={"filled"} borderRadius="3xl">
        <CardHeader>
          <Image
            onClick={onOpen}
            _hover={{ cursor: "pointer" }}
            src="public/WhatsApp Image 2023-02-17 at 2.45.03 PM.jpeg"
          />
        </CardHeader>
        <CardBody>
          <Box p={"1"}>
            <Text as={"b"} fontSize="2xl">
              Theatre Competition
            </Text>
          </Box>
          <Box p={"2"}>
            <Text>
              A brief comic sketch or burlesque will show the talent of
              students.
            </Text>
            <Flex my={"2"}>
              <Text mr={"1"} as={"b"}>
                Date:
              </Text>
              <Text>24th-Feb-2023</Text>
            </Flex>
            <Flex my={"2"}>
              <Text mr={"1"} as={"b"}>
                Time:
              </Text>
              <Text>9:30 AM - 2:30 PM</Text>
            </Flex>
            <Flex my={"2"}>
              <Text mr={"1"} as={"b"}>
                Venue:
              </Text>
              <Text>Rangmanch Stage(open stage)</Text>
            </Flex>
          </Box>
        </CardBody>
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Participants</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer>
                <Table variant={"simple"}>
                  <TableCaption>All the participants of the Event</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Year</Th>
                      <Th>Branch/Sec</Th>
                      <Th>Roll Number</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Shruti Gupta</Td>
                      <Td>2nd</Td>
                      <Td>CS-AIMl-2A</Td>
                      <Td>2101641540141</Td>
                    </Tr>
                    <Tr>
                      <Td>Krati Gupta</Td>
                      <Td>2nd</Td>
                      <Td>CS Core</Td>
                      <Td>2101640100142</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Card>
    </Box>
  );
};

const DanceCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Card variant={"filled"} borderRadius="3xl">
        <CardHeader>
          <Image
            onClick={onOpen}
            _hover={{ cursor: "pointer" }}
            src="public/WhatsApp Image 2023-02-17 at 2.45.03 PM (1).jpeg"
          />
        </CardHeader>
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Participants</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer>
                <Table variant={"simple"}>
                  <TableCaption>All the participants of the Event</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Year</Th>
                      <Th>Branch/Sec</Th>
                      <Th>Roll Number</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Harshita Singh Sengar</Td>
                      <Td>2nd</Td>
                      <Td>CSAI-2A</Td>
                      <Td>2101641520072</Td>
                    </Tr>
                    <Tr>
                      <Td>Nivi Srivastava</Td>
                      <Td>2nd</Td>
                      <Td>CS-AIML-2A</Td>
                      <Td>2101641530106</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <CardBody>
          <Box p={"1"}>
            <Text as={"b"} fontSize="2xl">
              Dance Competition
            </Text>
          </Box>
          <Box p={"2"}>
            <Text>
              Students need to showcase their talent about various dance form in
              solo, duet and group
            </Text>
            <Flex my={"2"}>
              <Text mr={"1"} as={"b"}>
                Date:
              </Text>
              <Text>24th-Feb-2023</Text>
            </Flex>
            <Flex my={"2"}>
              <Text mr={"1"} as={"b"}>
                Time:
              </Text>
              <Text>9:30 AM - 2:30 PM</Text>
            </Flex>
            <Flex my={"2"}>
              <Text mr={"1"} as={"b"}>
                Venue:
              </Text>
              <Text>Rangmanch Stage(open stage)</Text>
            </Flex>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

const SingingCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Card variant={"filled"} borderRadius="3xl">
        <CardHeader>
          <Image
          onClick={onOpen}
          _hover={{ cursor: "pointer"}}
           src="public/WhatsApp Image 2023-02-17 at 2.45.04 PM.jpeg" />
        </CardHeader>
        <CardBody>
          <Box p={"1"}>
            <Text as={"b"} fontSize="2xl">
              Singing Competition
            </Text>
          </Box>
          <Box p={"2"}>
            <Text>
              Students will participate to demonstrate their singing skills to a
              jury and a public audience.
            </Text>
            <Flex my={"2"}>
              <Text mr={"1"} as={"b"}>
                Date:
              </Text>
              <Text>24th-Feb-2023</Text>
            </Flex>
            <Flex my={"2"}>
              <Text mr={"1"} as={"b"}>
                Time:
              </Text>
              <Text>9:30 AM - 2:30 PM</Text>
            </Flex>
            <Flex my={"2"}>
              <Text mr={"1"} as={"b"}>
                Venue:
              </Text>
              <Text>Rangmanch Stage(open stage)</Text>
            </Flex>
          </Box>
        </CardBody>
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Participants</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer>
                <Table variant={"simple"}>
                  <TableCaption>All the participants of the Event</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Year</Th>
                      <Th>Branch/Sec</Th>
                      <Th>Roll Number</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Shivansh Mishra</Td>
                      <Td>2nd</Td>
                      <Td>CS-IOT-2A</Td>
                      <Td>2101641550070</Td>
                    </Tr>
                    <Tr>
                      <Td>Devesh Mishra</Td>
                      <Td>1st</Td>
                      <Td>CS-1B</Td>
                      <Td>221458</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Card>
    </Box>
  );
};
