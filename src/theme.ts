import { extendTheme } from "@chakra-ui/react";
import '@fontsource/fasthand';

export const theme = extendTheme({
    fonts: {
        body: "`Ubuntu`, sans-serif",
    },
    components: {
        Heading: {
            variants: {
                fasthand: {
                    fontFamily: "Fasthand, sans-serif"
                }
            }
        },
        Modal: {
            sizes: {
                custom: {
                    dialog: {
                        maxW: "90%",
                        maxH: "90%"
                    }
                }
            }
        }
    }
});