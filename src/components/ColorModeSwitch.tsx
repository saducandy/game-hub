import {
  Box,
  Center,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  
  return (
    <Box>
      <HStack>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="green"
        ></Switch>
        <Text color={colorMode === "light" ? "black" : "rgba(250, 113, 1, 1)"}>
          Dark Mode
        </Text>
      </HStack>
    </Box>
  );
};

export default ColorModeSwitch;
