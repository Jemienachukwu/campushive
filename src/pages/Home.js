import React from "react";
import Nav from "../Components/Nav";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Input,
  Button,
} from "@chakra-ui/react";
import campushive from "../assets/campushive-icon.jpeg";
import banner from "../assets/LandingPageBanner-_1_.jpeg";
import body from "../assets/body-1.jpeg";
import idan from "../assets/idan.jpeg";
import impact from "../assets/impact.jpeg";
import front from "../assets/front-banner.jpeg";
import four from "../assets/4.jpeg";
import { Link } from "react-router-dom";
import EventComp from "../Components/EventsComponent";
import mail from "../assets/mail.avif";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import Footer from "../Components/Footer";
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
            h={{ base: "80px", md: "120px" }}
            w={{ base: "80px", md: "120px" }}
            position="relative"
            top={{ base: "70px", md: "200px" }}
            left="40px"
          >
            <Image src={campushive} alt="img" />
          </Box>
        </Box>
      </Box>
      <Box mt="85px" px={{ base: "24px", md: "80px" }}>
        <Text fontSize="4xl" as="b">
          Campushive
        </Text>
        <Box>
          {card.map((item, i) => (
            <Flex
              my={{ base: "34px", md: "120px" }}
              flexDirection={{
                base: i % 2 === 0 ? "column" : "column-reverse",
                md: i % 2 === 0 ? "row" : "row-reverse",
              }}
              justifyContent="space-between"
              key={i}
            >
              <Box w={{ base: "95%", md: "40%" }} my="5">
                <Text fontSize="3xl" as="b" color="#37352f">
                  {item.title}
                </Text>
                <br />
                <br />
                <Text color="#37352f">{item.content}</Text>
                {i === 0 && (
                  <Link to="/clubs-orgs">
                    <Box
                      my="80px"
                      bg="#e6e6e5"
                      p="5"
                      w={{ base: "100%", md: "fit-content" }}
                    >
                      ✅ Find your hive! →
                    </Box>
                  </Link>
                )}
              </Box>
              <Box w={{ base: "95%", md: "40%" }} h="full" my="60px">
                <Image borderRadius="10px" src={item.img} alt="img" />
              </Box>
            </Flex>
          ))}
        </Box>
        <Box>
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

      <Box px={{ base: "24px", md: "80px" }} my="8">
        <Text fontSize="3xl" as="b">
          Events This Month
        </Text>
        <Box borderLeft="2px solid #000" p="3" fontSize="xl">
          See all upcoming events coming up this month here
        </Box>
        <EventComp />
      </Box>
      <Flex
        px={{ base: "24px", md: "80px" }}
        my="8"
        justifyContent={{ base: "center", md: "space-evenly" }}
        direction={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "90%", md: "60%" }} my="8">
          <Text>★★★★★ 4.9</Text>
          <Text fontSize="3xl">
            CampusHive made finding clubs on campus a breeze. I wish I had known
            about it sooner!
          </Text>
          <Box>
            IDAN
            <br />
            Student, Federal University Of Technology.
          </Box>
        </Box>
        <Box h="300px" w="300px">
          <Image src={four} alt="img" borderRadius="50%" />
        </Box>
      </Flex>
      <Box px={{ base: "24px", md: "80px" }} my="8">
        <Text fontSize="3xl" as="b">
          FAQs
        </Text>
        <Accordion defaultIndex={[0]} allowMultiple fontSize="md" my="8">
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <IoMdArrowDropdown />
                    ) : (
                      <IoMdArrowDropright />
                    )}

                    <Box as="span" flex="1" textAlign="left">
                      Can anyone join CampusHive?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Absolutely! All students, club presidents, and other members
                  of the campus community are welcome to join CampusHive. You
                  may join CampusHive whether you're a first-year or graduate
                  student to learn about, interact with, and participate in the
                  many clubs and organizations on campus.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <IoMdArrowDropdown />
                    ) : (
                      <IoMdArrowDropright />
                    )}
                    <Box as="span" flex="1" textAlign="left">
                      Is it FREE?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, joining and using CampusHive are totally free. We support
                  giving all students equitable chances to discover their
                  passions, form relationships, and benefit from their time on
                  campus. There are no additional costs or subscription fees;
                  this is how we make sure that everyone can access the
                  information.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <IoMdArrowDropdown />
                    ) : (
                      <IoMdArrowDropright />
                    )}
                    <Box as="span" flex="1" textAlign="left">
                      Can I use CampusHive to promote events?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Absolutely! Clubs, groups, and even individual individuals can
                  advertise and post their events on CampusHive. You may use
                  CampusHive to promote your event and reach a larger audience,
                  whether it's a club meeting, workshop, or campus-wide event.
                  It's an excellent method to interact with fellow students and
                  generate excitement on campus.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
        <Flex
          my="8"
          justifyContent={{ base: "center", md: "space-between" }}
          direction={{ base: "column", md: "row" }}
        >
          <Box fontSize="3xl" w={{ base: "90%", md: "50%" }}>
            Get Updates On The Latest Clubs and Events on Campus Based On Your{" "}
            <Box as="span" bg="rgba(255, 0, 0, 0.1)" borderRadius="5px">
              Interests
            </Box>
            <Input type="email" placeholder="email@address.com" />
            <Button bg="#000" color="#fff" mt="70px">
              Sign up →
            </Button>
          </Box>

          <Box w={{ base: "90%", md: "45%" }}>
            <Image src={mail} alt="img" />
          </Box>
        </Flex>
      </Box>

      <Box h="200px">
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
