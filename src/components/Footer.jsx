import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            minH={"40"}
            p={"16"}
            color={"white"}
        >
            <Stack direction={["column", "row"]}>
                <VStack
                    alignItems={"stretch"}
                    w={"full"}
                    py={"6"}
                    px={"4"}
                >
                    <Heading
                        textAlign={"center"}
                        size={"md"}
                        textTransform={"uppercase"}
                    >
                        Subscribe to our newsletter
                    </Heading>
                    <HStack
                        borderBottom={"2px solid white"}
                        py={"2"}
                    >
                        <Input
                            type={"email"}
                            placeholder='Enter your Email here...'
                            border={"none"}
                            borderRadius={"none"}
                            outline={"none"}
                        />
                        <Button
                            p={"0"}
                            colorScheme='purple'
                            variant={"ghost"}
                            borderRadius={"0 20px 20px 0"}
                        >
                            <AiOutlineSend size={"20"} />
                        </Button>
                    </HStack>
                </VStack>

                <VStack
                    py={"6"}
                    w={"full"}
                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}
                >
                    <Heading
                        size={"md"}
                        textTransform={"uppercase"}
                        textAlign={"center"}
                    >
                        VIDEO HUB
                    </Heading>
                    <Text>All Rights Reserved</Text>
                </VStack>

                <VStack
                    py={"6"}
                    w={"full"}
                >
                    <Heading
                        size={"md"}
                        textTransform={"uppercase"}
                    >
                        Social Media
                    </Heading>
                    <Button
                        variant={"link"}
                        colorScheme={"purple"}
                    >
                        <a 
                            href="https://instagram.com/mr._.bhat" 
                            target={"_blank"}
                            rel={"noreferrer"}
                        >Instagram</a>
                    </Button>
                    <Button
                        variant={"link"}
                        colorScheme={"purple"}
                    >
                        <a 
                            href="https://www.linkedin.com/in/pranav-bhat-b07ab1219/" 
                            target={"_blank"}
                            rel={"noreferrer"}
                        >LinkedIn</a>
                    </Button>
                    <Button
                        variant={"link"}
                        colorScheme={"purple"}
                    >
                        <a 
                            href="https://github.com/psbhatbvbcs" 
                            target={"_blank"}
                            rel={"noreferrer"}
                        >GitHub</a>
                    </Button>
                </VStack>
            </Stack>

        </Box>
    )
}

export default Footer