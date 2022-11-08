import { NextPage } from "next"
import Container from "../components/container"
import Intro from "../components/intro"
import {Stack, Wrap, WrapItem} from "@chakra-ui/react"
import GdscCanvas from "../components/gdsc-canvas"

const Home: NextPage = () => {
  return (
    <>
      <Container>  
        <Stack
        spacing = {'144px'}
        justifyContent = 'center'
        alignItems = "flex-start"
        px = {{base: '5vw', md: "7.5vw"}}
        mt = {{base: "12.5vh", md: "22.5vh"}}
        >

        <Wrap>
          <WrapItem> <Intro/> </WrapItem>
          <WrapItem> <GdscCanvas/> </WrapItem>


          </Wrap>
          </Stack>      
      </Container>
    </>
  )
}

export default Home