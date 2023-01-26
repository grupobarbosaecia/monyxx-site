import { extendTheme } from "@chakra-ui/react";

export const monyxxTheme = extendTheme({
    config: {
        useSystemColorMode: false,
        initialColorMode: "dark",
    },
    fonts: {
        body: "Poppins, sans-serif, Inter",
        heading: "Poppins, sans-serif, Inter",
    },
    styles: {
        global: {
            a: {
                textDecoration: "underline",
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                _focus: {
                    outline: "none",
                },
            },
        },
        Link: {
            baseStyle: {
                textDecoration: "underline",
                _hover: {
                    color: "gray.300",
                },
            },
        },
        Menu: {
            baseStyle: {
                list: {
                    zIndex: 100,
                },
            },
        },
        Popover: {
            baseStyle: {
                popper: {
                    zIndex: 100,
                },
            },
        },
        Radio: {
            baseStyle: {
                label: {
                    cursor: "pointer",
                },
            },
        },
    },
    colors: {
        green: {
            400: "#00C04B",
            500: "#5CFF9C",
            600: "#00be62",
        },
        gray: {
            200: "#300E53",
            300: "#d2d2d2",
            400: "#c4c4c4",
            500: "#252525",
        },
        monyxxColors: {
            100: "conic-gradient(from 149.15deg at 20.6% 100%, #0F1667 0deg, #1423D7 180deg, #0F1667 360deg)",
            200: "linear-gradient(180deg, #3E3E41 0%, #1F1F1F 100%)",
            300: "linear-gradient(180deg, #1F468C 0%, #32A5D3 100%)",
            400: "linear-gradient(210.96deg, #1C3680 0.01%, #266BA8 33.85%, #35B2DD 104.81%);",
            600: "linear-gradient(210.96deg, #161816 0.01%, rgba(48, 47, 51, 0.78) 42.05%, rgba(99, 99, 105, 0.51) 104.81%);",
            500: "#3DDCFC",
        },
        monyxx: {
            300: "#491A79",
            400: "#9F7AEA",
            500: "#3DDCFC",
            600: "#6F6C99",
            700: "#6B2AAD",
        },
        blackAlpha: {
            500: "#00000066",
        },
    },
    shadows: {
        outline: "none",
    },
});
