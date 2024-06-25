import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Link, Text, VStack } from "@chakra-ui/layout";
import { FaFacebook, FaTwitter, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <VStack backgroundColor="#0b2149" pr="150px" pl="150px" color="white" gap="20px" pt="50px" pb="30px">
            <HStack alignItems="start" gap="30px">
                <Box color="#7185AA" fontSize="21px" width="38%">
                  
                    <Text mb="25px">Our mission is to provide a free, world-class education to anyone, anywhere.</Text>
                    <Text>
                        StoryBuddy is a 501(c)(3) nonprofit organization.{" "}
                        <Text as="span" color="white">
                            Donate <FaExternalLinkAlt style={{ display: "inline", fontSize: "0.75rem" }} />
                        </Text>{" "}
                        or{" "}
                        <Text as="span" color="white">volunteer</Text>{" "}
                        today!
                    </Text>
                </Box>
                <VStack flexDirection="column" alignItems="start" fontSize="13px" fontWeight="500" gap="12px">
                    <Link color={"yellow"} fontSize={16}>Menu</Link>
                  
                    <Link>About StoryBuddy</Link>
                    
                    
                    <Link>Pricing & loyality</Link>
                    <Link>Contact us</Link>
                    <Link>Log in/Sign up</Link>
                    <Link>FAQs</Link>
                    <Link>Blogs</Link>
                   
                </VStack>
                <VStack flexDirection="column" alignItems="start" fontSize="13px" fontWeight="500" gap="12px">
                   <br />
                    <Link>Media & News</Link>
                    <Link>Writing Best Practices</Link>
                    <Link>Young Authors Fair</Link>
                    <Link>Promote Your Book</Link>
                   
                   
                </VStack>
                <VStack flexDirection="column" alignItems="start" fontSize="13px" fontWeight="500" gap="12px">
                    <Text color="yellow" fontSize={16}>Quick Links</Text>
                    <Link>Terms & Conditions</Link>
                    <Link>End user Licence Aggrement</Link>
                    <Link>Privecy & Policy</Link>
                    <Link>Refund  & Cancelletion</Link>
                    <Link>Shopping Policy</Link>
                   
                </VStack>
            </HStack>
            <Flex fontSize="12px" w="100%" alignItems="end" justifyContent="space-between">
                <VStack alignItems="start">
                    <HStack>
                        <Text as="span" color="#7185AA">Language</Text>
                        <Text>English</Text>
                    </HStack>
                    <HStack>
                        <Text as="span" color="#7185AA">Country</Text>
                        <Image src="https://cdn.kastatic.org/images/country-flag-icons/us-flag.png" w="15px" />
                        <Text>U.S.</Text>
                        <Image src="https://cdn.kastatic.org/images/country-flag-icons/india-flag.png" w="15px" />
                        <Text>India</Text>
                        <Image src="https://cdn.kastatic.org/images/country-flag-icons/mexico-flag.png" w="15px" />
                        <Text>Mexico</Text>
                        <Image src="https://cdn.kastatic.org/images/country-flag-icons/brazil-flag.png" w="15px" />
                        <Text>Brazil</Text>
                    </HStack>
                    <HStack mt="30px">
                        <Text color="#7185AA">© 2024 Toppers Academy</Text>
                        <Link>Terms of use</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Cookie Notice</Link>
                    </HStack>
                </VStack>
                <HStack gap="15px">
                    <FaFacebook size="2em" />
                    <FaTwitter size="2em" />
                    <FaInstagram size="2em" />
                </HStack>
            </Flex>
        </VStack>
    );
};

export { Footer };
