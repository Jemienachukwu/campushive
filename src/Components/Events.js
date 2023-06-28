import React from "react";
import { Card, Image, Text, Stack } from "@chakra-ui/react";
import { FiFileText } from "react-icons/fi";
import campushive from "../assets/campushive.jpeg";
import tedex from "../assets/TEDX.jpeg";
const Events = () => {
  const data = [{ img: campushive }];
  return (
    <div>
      <Card maxW="sm">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w="100%"
        />
        <Stack mt="6" spacing="3">
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
      </Card>
    </div>
  );
};

export default Events;
