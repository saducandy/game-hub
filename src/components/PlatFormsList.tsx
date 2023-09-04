import React from "react";
import usePlatForms from "../hooks/usePlatForms";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { PF } from "../hooks/useGames";

interface Props {
  onSelectingPF: (selectedPF: PF) => void;
  selectedPlatFormPL: PF | null;
}

const PlatFormsList = ({ onSelectingPF, selectedPlatFormPL }: Props) => {
  const { data, errors, isLoading } = usePlatForms();
  const { toggleColorMode, colorMode } = useColorMode();

  if (errors) return null;

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatFormPL?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((pf) => (
            <MenuItem
              color={colorMode === "light" ? "black" : "rgba(250, 113, 1, 1)"}
              onClick={() => onSelectingPF(pf)}
              value={pf.name}
              key={pf.id}
            >
              {pf.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatFormsList;
