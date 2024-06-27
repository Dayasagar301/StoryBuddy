import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
 
  Flex,
 
  Heading,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { FaBed, FaBookOpen, FaMagic } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const bgImage =
    "https://www.bribooks.com/_next/image?url=%2Fassets%2Fimages%2FAuthor%2FBg%2FBg%402x.png&w=1920&q=100";
  return (
    <div>
      <Box
                bg={useColorModeValue("gray.200", "gray.900")}

                w={"100%"}
                display={"flex"}
                flexDirection={['column', 'column', 'row']}
            >
                <Box paddingLeft={["5vh", "15vh"]} w={["100%", "100%", "45%"]}>
                    <Text
                        fontSize={50}
                        fontFamily={"monospace"}
                        paddingTop={20}
                        paddingBottom={3}
                    >
                        Welcome to StoryBuddy{" "}
                    </Text>

                    <List spacing={3} paddingBottom={7}>
                        <ListItem fontSize={20}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            First item
                        </ListItem>
                        <ListItem fontSize={20}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Second item
                        </ListItem>
                        <ListItem fontSize={20}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Third item
                        </ListItem>
                    </List>
                    <Link to="/storygenerator">
                        <Button
                            colorScheme="purple"
                            fontSize={["12px", "15px", "20px"]}
                            borderRadius="10vh"
                            fontFamily={"cursive"}
                            padding={10}
                        >
                            Try Me,I am Free!
                            <Image
                                h={55}
                                src="https://www.bribooks.com/_next/image?url=%2Fassets%2Fgif%2FBriBooWave.gif&w=64&q=75"
                            />
                        </Button>
                    </Link>
                </Box>
                <Box paddingTop={20} paddingLeft="7vh" w={["100%", "100%", "55%"]}>
                    <Image
                        h={"100%"}
                        w={"100%"}
                        src="https://www.bribooks.com/_next/image?url=%2Fassets%2Fimages%2FBanner%2FBanner.webp&w=1920&q=90"
                    />
                </Box>
            </Box>
      <Box display={"flex"} flexDirection={['column','column','row']} p={4} justifyContent={"space-evenly"}>
        <Box display={"flex"} alignItems={"center"} gap={4}>
          <Image src="https://www.bribooks.com/assets/images/Home/countStripe/author_icon.svg" />
          <Text fontSize={40} color={"green"} fontWeight={"bold"}>
            0
          </Text>
          <Text fontSize={20}>Authors</Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={4}>
          <Image src="https://www.bribooks.com/assets/images/Home/countStripe/books_written_icon.svg" />
          <Text fontSize={40} color={"violet"} fontWeight={"bold"}>
            0
          </Text>
          <Text fontSize={20}>Books Written</Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={4}>
          <Image src="https://www.bribooks.com/assets/images/Home/countStripe/author_published_icon.svg" />
          <Text fontSize={40} color={"orange"} fontWeight={"bold"}>
            0
          </Text>
          <Text fontSize={20}>Books Published</Text>
        </Box>
      </Box>
      <Box backgroundColor={"#6495ED"} height='auto' width={"100%"}>
        <Text
          textAlign={"center"}
          fontSize={30}
          fontFamily={"cursive"}
          color={"white"}
          paddingTop={10}
          h='auto'
        >
          4 easy steps
        </Text>
        <br />
        <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexDirection={['column', 'column', 'row']}
                p={4}
                gap={5}
                flexWrap={['wrap', 'wrap', 'nowrap']}
                h='auto'
            >
                <Box >
                    <Image h='auto' src="https://www.bribooks.com/_next/image?url=%2Fassets%2Fimages%2FHighlight%2FBook%2FBook%402x.png&w=128&q=75" />
                    <Text fontSize={20} fontFamily={"cursive"} color={"wheat"}>
                        Select Book Theme
                    </Text>
                    <Text color={"wheat"} fontSize={14}>
                        Choose from the wide range of pre-designed themes or upload custom
                        backgrounds
                    </Text>
                </Box>
                <Box >
                    <Image h='auto' src="https://www.bribooks.com/_next/image?url=%2Fassets%2Fimages%2FHighlight%2FAi%2FAi%402x.png&w=128&q=75" />
                    <Text fontSize={20} fontFamily={"cursive"} color={"wheat"}>
                        AI Guided Writing
                    </Text>
                    <Text color={"wheat"} fontSize={14}>
                        Artificial intelligence will guide you on each step starting from
                        first sentence to publish
                    </Text>
                </Box>
                <Box >
                    <Image h='auto' src="https://www.bribooks.com/_next/image?url=%2Fassets%2Fimages%2FHighlight%2FSell%2FSell%402x.png&w=96&q=75" />
                    <Text fontSize={20} fontFamily={"cursive"} color={"wheat"}>
                        Earn Royalties
                    </Text>
                    <Text color={"wheat"} fontSize={14}>
                        Sell your book internationally on BriBooks.com
                    </Text>
                </Box>
                <Box >
                    <Image h='auto' src="https://www.bribooks.com/_next/image?url=%2Fassets%2Fimages%2FHighlight%2FAward%2FAward%402x.png&w=64&q=75" />
                    <Text fontSize={20} fontFamily={"cursive"} color={"wheat"}>
                        Win Awards!
                    </Text>
                    <Text color={"wheat"} fontSize={14}>
                        Participate in global book fairs and win the exciting awards
                    </Text>
                </Box>
        </Box>
      </Box>
      <Box
        h={"30vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundImage={`url(${bgImage})`}
        backgroundColor={" #800080"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <Text color={"whitesmoke"} fontSize={30} fontFamily={"cursive"}>
          Join the league of young authors
        </Text>
      </Box>
       <Flex
      alignItems="center"
      justifyContent="center"
      padding="20px"
      flexWrap="wrap"
      maxWidth="1200px"
      margin="0 auto"
    >
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border="1px"
        borderColor="gray.300"
        padding="20px"
        width="100%"
        maxWidth="300px"
        margin="20px"
        textAlign="center"
        bg="red"
        color="wheat"
      >
        <Icon as={FaBookOpen} boxSize="40px" mb="10px" />
        <Heading as="h2" size="md" mb="10px">
          Interactive Stories
        </Heading>
        <Text>
          Generate personalized stories where children influence the plot,
          characters, and outcomes through their choices.
        </Text>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border="1px"
        borderColor="gray.300"
        padding="20px"
        width="100%"
        maxWidth="300px"
        margin="20px"
        textAlign="center"
        bg="blue"
        color="wheat"
        height={{ base: "auto", md: "36vh" }}
      >
        <Icon as={FaMagic} boxSize="40px" mb="10px" />
        <Heading as="h2" size="md" mb="10px">
          Educational Adventures
        </Heading>
        <Text>
          Enjoy stories that cover topics like science, history, and geography,
          fostering curiosity and learning.
        </Text>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border="1px"
        borderColor="gray.300"
        padding="20px"
        width="100%"
        maxWidth="300px"
        margin="20px"
        textAlign="center"
        bg="green"
        color="wheat"
      >
        <Icon as={FaBed} boxSize="40px" mb="10px" />
        <Heading as="h2" size="md" mb="10px">
          Bedtime Tales
        </Heading>
        <Text>
          Discover bedtime stories tailored to children's interests, creating a
          soothing and enjoyable bedtime routine.
        </Text>
      </Box>
    </Flex>
      <Box backgroundColor={'yellow'} display="flex" flexDir={["column", "column", "row"]} gap={5} p={8} >
                <Box display="flex" alignItems="center" justifyContent="center" width={["100%", "100%", "50%"]} >
                    <Image marginTop={20}h={'60vh'} src="https://www.golocalprov.com/cache/images/remote/https_s3.amazonaws.com/media.golocalprov.com/KidsCount.png" alt="StoryBuddy Image" />
                </Box>

                <Box paddingTop={20} width={["100%", "100%", "50%"]}>
                    <Text fontFamily={'cursive'} fontSize={25} color={'red'}>About us</Text>
                    <Text fontSize="23px" fontWeight="bold" mb="20px">Explore the Magic of Storytelling</Text>
                    <Text fontSize="18px" mb="20px" color="rgba(0,0,0,0.6)">
                        Welcome to StoryBuddy, your child&apos ultimate storytelling companion! We believe in the power of stories to spark imagination, teach valuable lessons, and encourage creativity in children. Our mission is to create delightful and educational storytelling experiences that engage young readers in unique and interactive ways. Join us on this enchanting journey and watch your child's imagination soar!
                    </Text>
                    <Button bg="red" borderRadius="10px" px="30px" py="15px" color="white" p={8}>More About Us</Button>
                </Box>
            </Box>
  <Text
                fontSize={{ base: 20, md: 25, lg: 30 }}
                textAlign={"center"}
                paddingTop={10}
                paddingBottom={10}
                fontFamily={"cursive"}
            >
                Frequently Asked <span style={{ color: "green" }}>Questions</span>{" "}
            </Text>
            <Accordion allowToggle borderRadius="xl">
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                fontSize={{ base: 15, md: 18, lg: 20 }}
                                fontFamily={"cursive"}
                            >
                                Why should kids learn to author books?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        When it comes to creativity or imagination, kids have a clear advantage over adults. They love inventing and telling stories, and StoryBuddy empowers children to turn their stories into books, publish their books with one click, participate in the world's best writing contests, win fun prizes, and even get global recognition for their books.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                fontSize={{ base: 15, md: 18, lg: 20 }}
                                fontFamily={"cursive"}
                            >
                                How does authoring books help children?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Studies show that writing for pleasure makes a significant difference to children’s educational performance, and writing is more likely to determine a child's future than their social or economic background. Furthermore, evidence suggests that young people who write for enjoyment will become lifelong readers and enjoy superior mental health as writing helps young people express how they feel.
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                fontSize={{ base: 15, md: 18, lg: 20 }}
                                fontFamily={"cursive"}
                            >
                                Does writing improve additional learning skills?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Multiple studies have demonstrated that writing, an essential skill itself, also improves reading comprehension, thinking, learning, and organization to see projects through to completion. Not surprisingly, the benefits for the child do not end there, and writing acts as a springboard into more technical disciplines such as coding and complex problem solving. Creativity, storytelling, analytics, organization, and determination are also directly benefited from writing.
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                fontSize={{ base: 15, md: 18, lg: 20 }}
                                fontFamily={"cursive"}
                            >
                                How early should one start writing?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        The short answer is as soon as possible. Learning to write stories at a young age is a great opportunity for kids and teens to develop their creativity and storytelling skills, while building the infrastructure to become curious adults and lifelong readers/learners.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Button
                backgroundColor={"green"}
                fontFamily={"cursive"}
                borderRadius={20}
                color={"wheat"}
                marginBottom={10}
                marginTop={10}
                mx="auto"
                display="block"
            >
                Load More FAQs
            </Button>
    </div>
  );
};

export default Home;
