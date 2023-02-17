import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Events() {
  return (
    <Box>
      <SimpleGrid p={"10"} m={"10"} spacing={4} columns={3}>
        <Card variant={"filled"} borderRadius="3xl">
          <CardHeader>
            <Image src="public/WhatsApp Image 2023-02-17 at 2.45.03 PM (1).jpeg" />
          </CardHeader>
          <CardBody>
            <Box p={"1"}>
              <Text as={"b"} fontSize="2xl">
                Dance Competition
              </Text>
            </Box>
            <Box p={"2"}>
              <Text>
                Students need to showcase their talent about various dance form in solo, duet and group
              </Text>
              <Flex>
              <Text mr={"1"} as={"b"}>Date:</Text>
              <Text>24th-Feb-2023</Text>
              </Flex>
              <Flex>
              <Text mr={"1"} as={"b"}>Time:</Text>
              <Text>9:30 AM - 2:30 PM</Text>
              </Flex>
              <Flex>
              <Text mr={"1"} as={"b"}>Venue:</Text>
              <Text>Rangmanch Stage(open stage)</Text>
              </Flex>
            </Box>
          </CardBody>
        </Card>
        <Card variant={"filled"} borderRadius="3xl">
          <CardHeader>
            <Image src="public/WhatsApp Image 2023-02-17 at 2.45.03 PM.jpeg" />
          </CardHeader>
          <CardBody>
            <Box p={"1"}>
              <Text as={"b"} fontSize="2xl">
                Theatre Competition
              </Text>
            </Box>
            <Box p={"2"}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                laborum odio accusantium ex deleniti voluptate pariatur
                consequatur fugit.
              </Text>
            </Box>
          </CardBody>
        </Card>
        <Card variant={"filled"} borderRadius="3xl">
          <CardHeader>
            <Image src="public/WhatsApp Image 2023-02-17 at 2.45.04 PM.jpeg" />
          </CardHeader>
          <CardBody>
            <Box p={"1"}>
              <Text as={"b"} fontSize="2xl">
                Dance Competition
              </Text>
            </Box>
            <Box p={"2"}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                laborum odio accusantium ex deleniti voluptate pariatur
                consequatur fugit.
              </Text>
            </Box>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
