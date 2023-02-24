"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/setters/theme";
import Navbar from "@/components/Navbar";
// import {  extendTheme } from "@chakra-ui/react";
// import theme from "@/components/theme";

// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

// const theme = extendTheme({ colors });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
          <Navbar />
          {/* <Flex ml={['5']} mr={['5']} > */}
          {children}
          {/* </Flex> */}
        </ChakraProvider>
      </body>
    </html>
  );
}
