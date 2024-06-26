import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Link, Text, VStack } from "@chakra-ui/layout";
import { FaFacebook, FaTwitter, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <VStack backgroundColor="#0b2149" px={{ base: "20px", md: "50px", lg: "150px" }} color="white" gap="20px" pt="50px" pb="30px">
            <HStack alignItems="start" gap="30px" flexWrap="wrap">
                <Box color="#7185AA" fontSize="21px" width={{ base: "100%", md: "60%", lg: "38%" }} mb={{ base: "20px", md: "0" }}>
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
                <VStack flexDirection="column" alignItems="start" fontSize="13px" fontWeight="500" gap="12px" width={{ base: "100%", md: "auto" }}>
                    <Text color={"yellow"} fontSize={16}>Menu</Text>
                    <Link>About StoryBuddy</Link>
                    <Link>Pricing & loyalty</Link>
                    <Link>Contact us</Link>
                    <Link>Log in/Sign up</Link>
                    <Link>FAQs</Link>
                    <Link>Blogs</Link>
                </VStack>
                <VStack flexDirection="column" alignItems="start" fontSize="13px" fontWeight="500" gap="12px" width={{ base: "100%", md: "auto" }}>
                    <Text color={"yellow"} fontSize={16}>Resources</Text>
                    <Link>Media & News</Link>
                    <Link>Writing Best Practices</Link>
                    <Link>Young Authors Fair</Link>
                    <Link>Promote Your Book</Link>
                </VStack>
                <VStack flexDirection="column" alignItems="start" fontSize="13px" fontWeight="500" gap="12px" width={{ base: "100%", md: "auto" }}>
                    <Text color="yellow" fontSize={16}>Quick Links</Text>
                    <Link>Terms & Conditions</Link>
                    <Link>End User License Agreement</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Refund & Cancellation</Link>
                    <Link>Shipping Policy</Link>
                </VStack>
            </HStack>
            <Flex fontSize="12px" w="100%" alignItems="end" justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
                <VStack alignItems="start" mb={{ base: "20px", md: "0" }}>
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
                        <Text color="#7185AA">© 2024 StoryBuddy</Text>
                        <Link>Terms of Use</Link>
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
