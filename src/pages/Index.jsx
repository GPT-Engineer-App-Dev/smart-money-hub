import { Container, Box, Heading, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box bg="brand.700" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="xl">Financial News</Heading>
        </Box>

        {/* Headlines Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Headlines</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Headline 1</Heading>
              <Text mt={2}>Summary of the first headline...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Headline 2</Heading>
              <Text mt={2}>Summary of the second headline...</Text>
            </Box>
          </VStack>
        </Box>

        <Divider />

        {/* Market Data Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <HStack spacing={4}>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" flex="1">
              <Heading as="h3" size="md">Market 1</Heading>
              <Text mt={2}>Details about market 1...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" flex="1">
              <Heading as="h3" size="md">Market 2</Heading>
              <Text mt={2}>Details about market 2...</Text>
            </Box>
          </HStack>
        </Box>

        <Divider />

        {/* Featured Articles Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Featured Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Article 1</Heading>
              <Text mt={2}>Summary of the first article...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Article 2</Heading>
              <Text mt={2}>Summary of the second article...</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;