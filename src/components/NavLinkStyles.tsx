import { Box, background, border } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NavLinkStyles = ({ children }: Props) => {
  return (
    <Box
      border="1px"
      borderRadius={5}
      paddingX={4}
      paddingY={1}
      color={"#71D4BA"}
      backgroundColor={"rgba(92, 110, 109, 0.68)"}
      _hover={{ border: "2px", backgroundColor: "rgba(92, 110, 109, 0.11)" }}
    >
      {children}
    </Box>
  );
};

export default NavLinkStyles;
