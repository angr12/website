import { Heading, VStack, Text, Flex, Box } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    
    <VStack spacing={4} justifyContent="left" alignItems="flex-start">
      <Heading color={"displayColor"}>
        About Me
      </Heading>
      <Text fontSize="display3" color="textSecondary">
      I am a Molecular Bioengineering at Imperial College London who is interested in pursuing a career in using Computational techniques such as Deep Learning for Bioengineering applications.
      </Text>
    </VStack>

  )

}