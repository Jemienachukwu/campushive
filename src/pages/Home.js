import React from "react";
import Nav from "../Components/Nav";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import campushive from "../assets/campushive-icon.jpeg";
import banner from "../assets/LandingPageBanner-_1_.jpeg";
import body from "../assets/body-1.jpeg";
import idan from "../assets/idan.jpeg";
import impact from "../assets/impact.jpeg";
import front from "../assets/front-banner.jpeg";
import { Link } from "react-router-dom";
import Events from "../Components/Events";

const Home = () => {
  const card = [
    {
      img: front,
      title: "Connecting You To The Buzz Of Campus Life!",
      content:
        "A digital platform that connects students with relevant clubs and organizations to foster community engagement and personal development chino rocks my world.",
    },
    {
      img: body,
      title: "Discover Your Hive",
      content:
        " Find your tribe on CampusHive and connect with like-minded individuals who share your interest.",
    },
    {
      img: idan,
      title: "Elevate Your Campus Life",
      content:
        "Take your campus experience to the next level with exciting events, activities, and opportunities brought to you by Campushive.",
    },
    {
      img: impact,
      title: "Thrive With Community",
      content:
        "Join a supportive and empowering community that helps you grow, learn, and achieve your goals both inside and outside the classroom.",
    },
  ];

  return (
    <div>
      <Nav />
      <Box>
        <Box
          bgImage={banner}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="100%"
          h={{ base: "100px", md: "280px" }}
        >
          <Box
            h={{ base: "60px", md: "120px" }}
            w={{ base: "60px", md: "120px" }}
            position="relative"
            top={{ base: "70px", md: "200px" }}
            left="40px"
          >
            <Image src={campushive} alt="img" />
          </Box>
        </Box>
      </Box>
      <Box mt="8" px="9">
        <Text fontSize="4xl" as="b" my="4">
          Campushive
        </Text>
        <Box>
          {card.map((item, i) => (
            <Flex
              my="120px"
              flexDirection={{
                base: i % 2 === 0 ? "column" : "column-reverse",
                md: i % 2 === 0 ? "row" : "row-reverse",
              }}
              justifyContent="space-evenly"
              key={i}
            >
              <Box w={{ base: "95%", md: "40%" }} my="5">
                <Text fontSize="3xl" as="b" color="#37352f">
                  {item.title}
                </Text>
                <Text color="#37352f">{item.content}</Text>
                {i === 0 && (
                  <Link to="/clubs-orgs">
                    <Box mt="80px" bg="#e6e6e5" p="5" w="fit-content">
                      ✅ Find your hive! →
                    </Box>
                  </Link>
                )}
              </Box>
              <Box w={{ base: "95%", md: "40%" }} h="full">
                <Image borderRadius="10px" src={item.img} alt="img" />
              </Box>
            </Flex>
          ))}
        </Box>
        <Box px={{ base: "0", md: "8" }}>
          <Text fontSize="3xl" as="b">
            This is For You If...
          </Text>
          <Flex direction={{ base: "column", md: "row" }}>
            <Container
              border="1px solid #e6e6e5"
              borderRadius="8px"
              my="3"
              p={{ base: "5", md: "60px" }}
              w={{ base: "99%", md: "fitContent" }}
            >
              <Text>You are a</Text>
              <Box my="8">
                <Text fontSize="3xl" as="b">
                  Student
                </Text>
              </Box>
              <Text fontSize="md" as="b">
                What you get
              </Text>{" "}
              <Box>
                <Box py="2">
                  ➕ Easy way to discover and join clubs and organizations on
                </Box>
                campus
                <Box py="2">➕ Opportunities to connect with like-minded</Box>
                peers and build a sense of community
                <Box py="2">
                  ➕ Access to resources and support for navigating
                </Box>
                campus life
              </Box>
              <Box my="4">
                <Link to="#">Find clubs →</Link>
              </Box>
            </Container>
            <Container
              bg="#e6e6e5"
              borderRadius="8px"
              my="3"
              p={{ base: "5", md: "60px" }}
              w={{ base: "99%", md: "fitContent" }}
            >
              <Text>You are a</Text>
              <Box my="8">
                <Text fontSize="3xl" as="b">
                  Community Leader
                </Text>
              </Box>
              <Text fontSize="md" as="b">
                What you get
              </Text>{" "}
              <Box>
                <Box py="2">
                  ➕ Centralized platform for managing and promoting your club
                </Box>
                <Box py="2">
                  ➕ Increased visibility and access to potential members
                </Box>
                <Box py="2">➕ Dedicated support team and more</Box>
              </Box>
              <Box my="4">
                <Link to="#">Add your clubs →</Link>
              </Box>
            </Container>
          </Flex>
        </Box>
      </Box>

      <Box>
        <Events />
      </Box>
    </div>
  );
};

export default Home;
