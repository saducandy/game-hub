import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import logo from "../assets/spider_logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import NavLinkStyles from "./NavLinkStyles";
import GameCardContainer from "./GameCardContainer";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <GameCardContainer>
          <Image borderRadius={50} src={logo} boxSize={"60px"}></Image>
        </GameCardContainer>

        <Stack direction="row" spacing={4} align="center">
          <LinkBox>
            <NavLinkStyles>
              <LinkOverlay href="http://localhost:10017/">Home</LinkOverlay>
            </NavLinkStyles>
          </LinkBox>

          <LinkBox>
            <NavLinkStyles>
              <LinkOverlay href="http://localhost:10017/about/">
                About
              </LinkOverlay>
            </NavLinkStyles>
          </LinkBox>
          <LinkBox>
            <NavLinkStyles>
              <LinkOverlay href="http://localhost:10017/news/">
                News
              </LinkOverlay>
            </NavLinkStyles>
          </LinkBox>
          <LinkBox>
            <NavLinkStyles>
              <LinkOverlay href="http://localhost:10017/notice/">
                Notice
              </LinkOverlay>
            </NavLinkStyles>
          </LinkBox>
          <LinkBox>
            <NavLinkStyles>
              <LinkOverlay href="http://localhost:10017/forum/" id="new">
                Forum
              </LinkOverlay>
            </NavLinkStyles>
          </LinkBox>
        </Stack>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
