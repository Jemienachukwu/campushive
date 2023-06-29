import React from "react";
import logo from "../assets/Frame_1 (3).avif";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Flex
      px={{ base: "24px", md: "80px" }}
      mt="80px"
      justifyContent={{ base: "center", md: "space-between" }}
      direction={{ base: "column", md: "row" }}
    >
      <Image src={logo} alt="img" w="250px" h="70px" />

      <Box display="block" my="6" color=" #37352f" textDecoration="underline">
        Links
        <Box>
          <Link>About us</Link>
        </Box>
        <Box>
          <Link>Events</Link>
        </Box>
        <Box>
          <Link>Clubs/orgs</Link>
        </Box>
        <Box>
          <Link>Blog</Link>
        </Box>
      </Box>

      <Box my="6">
        Follow us
        <Box>
          <Link>Facebook</Link>
        </Box>
        <Box>
          <Link>Twitter</Link>
        </Box>
        <Box>
          <Link>Instagram</Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Footer;
