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
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const NavMenu = (props: Props) => {
  // Variables
  const navigate = useNavigate();

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
              <Text
                onClick={() => {
                  navigate("/");
                  props.onClose();
                }}
                color="#FF2424"
              >
                HOME
              </Text>

              <Text
                onClick={() => {
                  navigate("/categories");
                  props.onClose();
                }}
                color="#FF2424"
              >
                CATEGORIES
              </Text>

              <Text
                onClick={() => {
                  navigate("/region");
                  props.onClose();
                }}
                color="#FF2424"
              >
                BY REGION
              </Text>

              <Text
                onClick={() => {
                  navigate("/random");
                  props.onClose();
                }}
                color="#FF2424"
              >
                RANDOM
              </Text>

              <Text
                onClick={() => {
                  navigate("/favorites");
                  props.onClose();
                }}
                color="#FF2424"
              >
                FAVORITES
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenu;
