import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  chakra,
  // Link,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoTiktok } from 'react-icons/io5'
import Image from 'next/legacy/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { prefix } from '../utils/prefix'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0}>
          <Box align="center">
            <Image
              src={`${prefix}/card.png`}
              alt="Dan Abramov"
              // boxSize="200px"
              width={862}
              height={470}
              // display="inline-block"
            />
          </Box>
        </Section>

        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          align="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a Software Learner based in Shandong, China !
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Momo Liu
            </Heading>
            <p>A Learner who still on her way</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src={`${prefix}/images/Levi.jpg`}
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Study
          </Heading>
          <Paragraph>
            Momo is a student of Software Engineer based in Shandong, China with
            a passion for building digital services/stuff she wants. She is full
            of curiosity about all things launching products, from planning and
            designing all the way to solving real-life problems with code.
            Currently, she is working hard to get into the desired postgraduate
            school.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink
              href="https://www.douyin.com/user/MS4wLjABAAAA6SCiFLdCxusMB6by-sUzQk78BRGlqj2bAGo-I1bhYDNd5sc3Ntv1Zltxo5B1J-EY"
              passHref
              scroll={false}
            >
              <Button
                leftIcon={<IoLogoTiktok />}
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                My TikTok
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in Tianjin, China.
          </BioSection>
          <BioSection>
            <BioYear>2018 to 2021</BioYear>
            Study in Nankai Senior School.
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Study at the department of Software Engineering in Shandong
            University.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <BioSection>
            <BioYear>Monitor</BioYear>in Class 4 of Software Engineering
          </BioSection>
          <BioSection>
            <BioYear>Leader</BioYear>in a social service team called “girls
            free”
          </BioSection>
          <BioSection>
            <BioYear>Minister</BioYear>of the arts division in the academy
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Music, Draw, Visualization……</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
