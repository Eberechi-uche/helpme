import { LogoIcon } from "@/components/icons/icons";
import { Flex, Text } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex w={"100%"}>
      <Flex w={"100%"} justify={"space-between"}>
        <Flex>
          <LogoIcon />
          Helpout
        </Flex>
        <Flex>
          <Text>Features</Text>
          <Text>How it works</Text>
        </Flex>
        <Flex>
          <Text> Get started</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
