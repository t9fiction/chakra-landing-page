import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { GrSun } from "react-icons/gr";
import { Box, ColorModeScript, Icon, useColorModeValue } from "@chakra-ui/react";
import theme from "@/components/theme";
import { useColorMode } from "@chakra-ui/color-mode";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("black", "white");
  return (
    <Box>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Icon aria-label="Toggle Mode" onClick={toggleColorMode} position={['absolute']} top={2} right={2}>
        {colorMode === "dark" ? <BsMoonStarsFill size={20} /> : <GrSun size={20} />}
      </Icon>
    </Box>
  );
};

export default Header;
