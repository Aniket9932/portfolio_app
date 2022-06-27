// import react from "react";

import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun , FaMoon, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import About from "./components/About";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Social from "./components/Social";

// function App() {
//   return <div>Hello</div>
// }

// export default App;


function App() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    

    return (
      <VStack align={'left'} p='10'>
        <Flex width="100%">
            <Heading 
            ml="2" size="md" fontWeight="semibold" color="cyan.400">Portfolio</Heading>
          <Spacer></Spacer>
            
        
          <a href="https://www.linkedin.com/in/aniket-mahato-997169205/" target={"_blank"} rel="noreferrer"><IconButton icon={<FaLinkedin />} isRound="true" ></IconButton></a>
          <a href="https://www.instagram.com/_.aniket_mahato._/" target={"_blank"} rel="noreferrer"><IconButton ml="2" icon={<FaInstagram />} isRound="true"></IconButton></a>
          <a href="https://github.com/aniket993?tab=repositories" target={"_blank"} rel="noreferrer"><IconButton ml="2" icon={<FaGithub />} isRound="true"></IconButton></a>
          <IconButton ml="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>

        <Header />
        <Social />
        <Profile />
        <Projects />
        <About />
      </VStack>
      
    )
}

export default App;