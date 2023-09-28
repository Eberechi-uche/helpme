import { Flex, Heading, Text, Button } from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <>
      <Flex
        w={"100%"}
        my={"0.5"}
        bg={"brand.white"}
        p={{
          base: "8",
          lg: "16",
        }}
        justify={"center"}
      >
        <Flex
          w={"100%"}
          justify={"space-between"}
          maxW={"1100px"}
          flexWrap={"wrap"}
        >
          <Flex
            flexDir={"column"}
            w={{
              base: "100%",
              md: "50%",
            }}
          >
            <Heading textTransform={"capitalize"}>
              Show them <br />
              dont just tell them
            </Heading>

            <Text my={"2"}>
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </Text>

            <Button w={"fit-content"} my={"4"} px={"4"}>
              Install help me out
            </Button>
          </Flex>
          <Flex>
            <Text> other side</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
