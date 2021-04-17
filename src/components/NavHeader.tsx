import React from "react";
import { Box } from "@chakra-ui/react";

const NavHeader = () => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    px={6}
    py={4}
    fontWeight="bold"
    fontSize="1.5em"
    bg="blue100"
    color="orange.500"
  >
    Header
  </Box>
);

export default NavHeader;
