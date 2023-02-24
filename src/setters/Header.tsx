import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { GrSun } from "react-icons/gr";
import { Box, ColorModeScript, Icon, useColorModeValue } from "@chakra-ui/react";
import theme from "@/setters/theme";
import { useColorMode } from "@chakra-ui/color-mode";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("black", "white");
  return (
    <Box>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Icon aria-label="Toggle Mode" onClick={toggleColorMode}>
        {colorMode === "dark" ? <BsMoonStarsFill size={20} /> : <GrSun size={20} />}
      </Icon>
    </Box>
  );
};

export default Header;
