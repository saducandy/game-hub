import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const SortGames = () => {
  const sortArrayItems = ["one", "two", "three", "four", "five", "six"];
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          OrderBy:Relevance
        </MenuButton>
        <MenuList>
          {sortArrayItems.map((item) => (
            <MenuItem
              color={colorMode === "light" ? "black" : "rgba(250, 113, 1, 1)"}
              key={item}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortGames;
