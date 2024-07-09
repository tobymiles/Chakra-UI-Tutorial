import React from "react";
import { HStack, Icon, Text, Box, Stack } from "@chakra-ui/react";
import {
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
  HassleFreeIcon,
} from "../icons/Icons";

export function Feature(props) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize={["8", "8", "12"]} />
      <Text fontSize="lg" fontWeight="bold" textAlign={"left"}>
        {children}
      </Text>
    </HStack>
  );
}

function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8">
      <Stack px="12" spacing="5" direction={["column", "column", "row"]}>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30days money back guaranteed
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup free, 100% Hassle Free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription, pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}

export default Features;
