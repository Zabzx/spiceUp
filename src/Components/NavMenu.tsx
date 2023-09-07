import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Flex,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const NavMenu = (props: Props) => {
  return (
    <>
      <Drawer isOpen={props.isOpen} placement="right" onClose={props.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="space-between"
              h="100%"
            >
              <Text color="#FF2424">HOME</Text>
              <Text color="#FF2424">CATEGORIES</Text>
              <Text color="#FF2424">BY REGION</Text>
              <Text color="#FF2424">RANDOM</Text>
              <Text color="#FF2424">FAVORITES</Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenu;
