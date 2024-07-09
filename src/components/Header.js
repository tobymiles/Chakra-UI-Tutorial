import { Text, Heading, Box } from "@chakra-ui/react";

function Header() {
  return (
    <Box pb="28" as="section">
      <Box
        color="gray.50"
        bg="purple.600"
        textAlign={["center"]}
        pt="90px"
        pb="198px"
        px="8"
      >
        <Heading
          fontWeight="extrabold"
          fontSize={["3xl", "3xl", "5xl"]}
          textAlign={["left", "left", "center"]}
        >
          Simple pricing for your business
        </Heading>
        <Text
          fontWeight="medium"
          fontSize={["md", "md", "lg"]}
          pt="4"
          textAlign={["left", "left", "center"]}
        >
          Plans that are carefully crafted to suit your business
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
