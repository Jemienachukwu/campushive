import {
  Box,
  Flex,
  Spacer,
  Button,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import logo from "../assets/Frame_1 (3).avif";
const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      p={4}
      alignItems="center"
      position="sticky"
      top="0"
      zIndex="1"
      bg="#fff"
      h="fit-content"
    >
      <Box>
        <Link to="/">
          <Image src={logo} alt="logo" h="18px" />
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "flex" }}>
        <Box mx={4}>
          <Link to="/">Home</Link>
        </Box>
        <Box mx={4}>
          <Link to="/about">About Us</Link>
        </Box>
        <Box mx={4}>
          <Link to="/events">Events</Link>
        </Box>
        <Box mx={4}>
          <Link to="/blogs">Blogs</Link>
        </Box>
        <Box mx={4}>
          <Link to="/why-join-a-commmunity">Why Join A Community ?</Link>
        </Box>
      </Box>
      <Box>
        <Button bg="#37352f" color="#fff" borderRadius="20px">
          <Link to="/clubs-orgs">Find Your Hive</Link>
        </Button>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open menu"
          icon={<FiMenu />}
          bg="transparent"
          onClick={onOpen}
        />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            width="90%"
            p="3"
            initial={{ top: "0px", transform: "translateY(-20%)" }}
          >
            <ModalCloseButton />
            <ModalBody>
              <Box display="block">
                <Box my={4}>
                  <Link to="/">Home</Link>
                </Box>
                <Box my={4}>
                  <Link to="/about">About Us</Link>
                </Box>
                <Box my={4}>
                  <Link to="/events">Events</Link>
                </Box>
                <Box my={4}>
                  <Link to="/blogs">Blogs</Link>
                </Box>
                <Box my={4}>
                  <Link to="/events">Why Join A Community ?</Link>
                </Box>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};

export default Nav;
