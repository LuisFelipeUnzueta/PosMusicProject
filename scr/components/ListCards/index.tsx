import { Box } from "native-base";
import React from "react";


export const Teste = () => {
    
    return <Box borderRadius={20} padding={5} width="100%" bg="gray.500" p="4" shadow={2} _text={{
      fontSize: "md",
      fontWeight: "bold",
      color: "white"
    }} >
        Playing now...
      </Box>;
  };