import React from "react";
import Nav from "../Components/Nav";
import EventComp from "../Components/EventsComponent";
import { Box, Text } from "@chakra-ui/react";
import Footer from "../Components/Footer";

const Events = () => {
  return (
    <div>
      <Nav />
      <Box px={{ base: "24px", md: "80px" }} my="50px">
        <Text fontSize="3xl" my="8">
          Event gallery
        </Text>
        <EventComp />
        <Footer />
      </Box>
    </div>
  );
};

export default Events;
