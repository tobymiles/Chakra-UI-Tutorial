import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";

import { CheckIcon } from "../icons/Icons";

export const ListItem = (props) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="5" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

function Pricing() {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        mx="auto"
        mt="-256px"
        borderRadius="3"
        overflow="hidden"
        boxShadow="0 2.8px 2.2px rgba(0, 0, 0, 0.034)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="purple.50" p="60px" textAlign="center">
            <Text fontSize="xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize="60px" mt="4">
              $329
            </Heading>
            <Text color="#171923" fontSize="lg" fontWeight="500" pt="8px">
              billed just once
            </Text>
            <Button
              colorScheme="purple"
              size={["md", "md", "lg"]}
              w={["150px", "282px", "282px"]}
              mt="6"
              alignItems="center"
            >
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="lg" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package business.
            </Text>
            <Stack as="ul" spacing="20px" pt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone number</ListItem>
              <ListItem>Automated messages as via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Pricing;
