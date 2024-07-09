import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function Chakabox() {
  const [text, setText] = useState("Hello I am a Box");

  return (
    <>
      <Box
        bg="tomato"
        color="white"
        maxW="100%"
        maxH="100%"
        mx="auto"
        fontSize={24}
        textAlign={"center"}
        p={2}
      >
        {text}
      </Box>
      <Box>
        <Button p={(2, 4)} w={32} bg="black" color="white" _hover="blue">
          Search
        </Button>
      </Box>
    </>
  );
}

export default Chakabox;
