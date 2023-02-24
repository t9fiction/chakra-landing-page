'use client';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const ProjectPage = () => {
  return (
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
      // pos="absolute"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={['4','16']}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 6,
            md: 12,
          }}
        >
          <Box>
            <Heading
              as={"h2"}
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
              textShadow="2px 0 currentcolor"
            >
              Clear overview for efficient tracking
            </Heading>
            <Text
              as={"p"}
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </Text>
            <Button
              w={{
                base: "full",
                sm: "auto",
              }}
              size="lg"
              bg="gray.900"
              _dark={{
                bg: "gray.700",
              }}
              _hover={{
                bg: "gray.700",
                _dark: {
                  bg: "gray.600",
                },
              }}
              color="gray.100"
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            bg="gray.200"
            _dark={{
              bg: "gray.700",
            }}
          ></Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection="column-reverse"
          mb={['4','12']}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box
            order={{
              base: "initial",
              md: 2,
            }}
          >
            <Heading
              as={"h2"}
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
            >
              Decide how you integrate Payments
            </Heading>
            <Text
              as={"p"}
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </Text>
            <Button
              w={{
                base: "full",
                sm: "auto",
              }}
              size="lg"
              bg="gray.900"
              _dark={{
                bg: "gray.700",
              }}
              _hover={{
                bg: "gray.700",
                _dark: {
                  bg: "gray.600",
                },
              }}
              color="gray.100"
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            bg="gray.200"
            _dark={{
              bg: "gray.700",
            }}
          ></Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default ProjectPage;
