import { useState, useEffect, useRef } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Button,
    Text,
    Heading,
    Container,
    IconButton,
    Stack,
    Tooltip,
    Spinner,
    VStack,
    Flex,
    Spacer,
    Input,
    useToast,
} from "@chakra-ui/react";
import { FiVolume2, FiVolumeX, FiPause, FiPlay } from "react-icons/fi";
import axios from "axios";

const Story = () => {
    const [story, setStory] = useState("");
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [moral, setMoral] = useState("");
    const [error, setError] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const speechSynthesisRef = useRef(null);
    const toast = useToast();

    useEffect(() => {
        return () => {
            stopSpeaking();
        };
    }, []);

    useEffect(() => {
        if (story) {
            const derivedMoral = deriveMoralFromStory(story);
            setMoral(derivedMoral);
        }
    }, [story]);

    const deriveMoralFromStory = (storyText) => {
        const sentences = storyText.split(".");
        const relevantPhrases = [
            "moral of the story",
            "lesson learned",
            "moral lesson",
            "moral:",
            "lesson:",
            "moral is",
            "lesson is",
        ];

        for (let sentence of sentences) {
            for (let phrase of relevantPhrases) {
                if (sentence.toLowerCase().includes(phrase)) {
                    return sentence.trim();
                }
            }
        }

        return "No specific moral found.";
    };

    const generateStory = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const apiKey = "382o0ac2c14btd9435906fb13df381eb";
        const prompt = `User instructions: generate a story titled "${title}"`;
        const context =
            "You are a story expert and love to write stories. Your mission is to generate a story covering educational topics such as science, history, geography, and more. Incorporate moral lessons and character development. Encourage creative writing exercises and allow children to contribute to story creation. Provide bedtime story recommendations tailored to children's interests.";
        const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
            prompt
        )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

        try {
            const response = await axios.get(apiURL);
            const generatedStory = Array.isArray(response.data.answer)
                ? response.data.answer.join("<br>")
                : response.data.answer;
            setStory(generatedStory);
            setError(null);
        } catch (error) {
            setError("Error fetching story. Please try again later.");
            toast({
                title: "Error",
                description: "Failed to generate story. Please try again later.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
        setIsLoading(false);
    };

    const speakStory = (restart = false) => {
        if (restart || isPaused) {
            stopSpeaking();
        }

        if ('speechSynthesis' in window) {
            if (restart || !isPaused) {
                const utterance = new SpeechSynthesisUtterance(story.replace(/<br\s*\/?>/gi, '\n'));
                utterance.onend = () => {
                    setIsSpeaking(false);
                    setIsPaused(false);
                    setHighlightedIndex(-1); // Reset highlighted index after speaking ends
                };
                utterance.onboundary = (event) => {
                    if (event.name === "word") {
                        setHighlightedIndex(event.charIndex);
                    }
                };
                speechSynthesisRef.current = utterance;
                speechSynthesis.speak(utterance);
            } else {
                speechSynthesis.resume();
            }
            setIsSpeaking(true);
            setIsPaused(false);
        } else {
            alert("Sorry, your browser doesn't support text-to-speech.");
        }
    };

    const stopSpeaking = () => {
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
            setIsSpeaking(false);
            setIsPaused(false);
            setHighlightedIndex(-1); // Reset highlighted index when speaking is stopped
        }
    };

    const pauseSpeaking = () => {
        if ('speechSynthesis' in window) {
            speechSynthesis.pause();
            setIsPaused(true);
            setIsSpeaking(false);
        }
    };

    const generateNewStory = () => {
        setStory("");
        setTitle("");
    };

    const generateAnotherStory = (event) => {
        event.preventDefault();
        generateStory(event);
    };

    const renderHighlightedText = () => {
        if (!story) return "";

        const text = story.replace(/<br\s*\/?>/gi, '\n');
        const words = text.split(/\s+/);
        return words.map((word, index) => {
            const isCurrentWord = index === highlightedIndex;
            return (
                <span
                    key={index}
                    style={{
                        fontSize: isCurrentWord ? "1.2em" : "1em",
                        fontWeight: isCurrentWord ? "bold" : "normal",
                    }}
                >
                    {word}{" "}
                </span>
            );
        });
    };

    return (
        <Container centerContent p={4} minHeight={"600px"} maxWidth="100%">
            <Box textAlign="center" width="100%">
                <Heading mb={4}>Story Generator</Heading>
                <form onSubmit={generateStory}>
                    <VStack spacing={2} alignItems="center">
                        <FormControl
                            id="story-title"
                            display="flex"
                            alignItems={{ base: "flex-start", md: "center" }}
                            flexDirection={{ base: "column", md: "row" }}
                            w="100%"
                            mb={1}
                        >
                            <FormLabel gap={2} mb={0}>
                                Enter Your Story Title
                            </FormLabel>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                placeholder="Write story title here..."
                                flex="3"
                                mb={0}
                            />
                            <Button
                                type="submit"
                                bgGradient="linear(to-r, #6366F1, #EC4899)"
                                color="white"
                                isLoading={isLoading}
                                loadingText="Generating..."
                                disabled={isLoading}
                                ml={{ md: 2 }}
                                mt={{ base: 2, md: 0 }}
                            >
                                {isLoading ? "Generating..." : "Generate Story"}
                            </Button>
                        </FormControl>
                    </VStack>
                </form>

                {error && (
                    <Box mt={4}>
                        <Text color="red.500">{error}</Text>
                    </Box>
                )}

                {isLoading ? (
                    <Spinner size="lg" mt={8} />
                ) : (
                    story && (
                        <VStack align="start" spacing={4} mt={8} width="100%">
                            <Box
                                w="100%"
                                p={4}
                                border="1px solid"
                                borderColor="gray.200"
                                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                borderRadius="md"
                                bg="white"
                            >
                                <Heading size="md">Generated Story</Heading>
                                <Text mt={2} whiteSpace="pre-wrap">
                                    {renderHighlightedText()}
                                </Text>
                                <Flex mt={4} flexDirection={{ base: "column", md: "row" }}>
                                    <Spacer />
                                    <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={{ base: 4, md: 0 }}>
                                        <Tooltip label={isSpeaking ? "Stop Speaking" : "Speak Story"}>
                                            <IconButton
                                                icon={isSpeaking ? <FiVolumeX /> : <FiVolume2 />}
                                                colorScheme="teal"
                                                aria-label={isSpeaking ? "Stop Speaking" : "Speak Story"}
                                                onClick={isSpeaking ? stopSpeaking : () => speakStory()}
                                                isDisabled={!story}
                                            />
                                        </Tooltip>
                                        <Tooltip label={isPaused ? "Resume Speaking" : "Pause Speaking"}>
                                            <IconButton
                                                icon={isPaused ? <FiPlay /> : <FiPause />}
                                                colorScheme="teal"
                                                aria-label={isPaused ? "Resume Speaking" : "Pause Speaking"}
                                                onClick={isPaused ? () => { speechSynthesis.resume(); setIsPaused(false); setIsSpeaking(true); } : pauseSpeaking}
                                                isDisabled={!story}
                                            />
                                        </Tooltip>
                                        <Tooltip label="Restart Speaking">
                                            <IconButton
                                                icon={<FiPlay />}
                                                colorScheme="teal"
                                                aria-label="Restart Speaking"
                                                onClick={() => speakStory(true)}
                                                isDisabled={!story}
                                            />
                                        </Tooltip>
                                        <Button onClick={(e) => generateAnotherStory(e)} colorScheme="teal" variant="outline">
                                            Another Story
                                        </Button>
                                        <Button onClick={() => generateNewStory()} colorScheme="teal" variant="outline">
                                            New Story
                                        </Button>
                                    </Stack>
                                </Flex>
                            </Box>
                            {moral && (
                                <Box w="100%">
                                    <Heading size="md">Moral of the Story</Heading>
                                    <Text mt={2}>{moral}</Text>
                                </Box>
                            )}
                        </VStack>
                    )
                )}
            </Box>
        </Container>
    );
};

export default Story;
