"use client";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Stack  direction={{ base: "column", md: "row" }} justify='center'>
        <Flex py={['2','8']} px='2' flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Freelance
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Design Projects
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The project board is an exclusive resource for contract work.
              It&apos;s perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Create Project
              </Button>
              <Button rounded={"full"}>How It Works</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} py={["0", "10"]} pr={['0','12']}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            rounded={{base: "4",sm:'20'}}
            src={"./img/hero-photo.jpg"}
          />
        </Flex>
    </Stack>
  );
}
