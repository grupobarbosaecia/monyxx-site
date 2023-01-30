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
                textDecoration: "none",
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
                textDecoration: "none",
                _hover: {
                    color: "white.300",
                    textDecoration: "none",
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
        white: {
            0: "#FFFFFF",
            200: "#CBD8F4",
            300: "#ABB5CA",
        },
        green: {
            400: "#00C04B",
            500: "#5CFF9C",
            600: "#00be62",
        },
        gray: {
            200: "#300E53",
            300: "#d2d2d2",
            400: "#c4c4c4",
            500: "#55597E"
        },
        monyxxColors: {
            100: "conic-gradient(from 149.15deg at 20.6% 100%, #0F1667 0deg, #1423D7 180deg, #0F1667 360deg)",
            200: "#43415C",
            300: "linear-gradient(180deg, #1F468C 0%, #32A5D3 100%)",
            400: "linear-gradient(210.96deg, #1C3680 0.01%, #266BA8 33.85%, #35B2DD 104.81%);",
            600: "linear-gradient(210.96deg, #161816 0.01%, rgba(48, 47, 51, 0.78) 42.05%, rgba(99, 99, 105, 0.51) 104.81%);",
            degrade: {
                black: "linear-gradient(210.96deg, #161816 0.01%, #2A293C 42.05%, #525171 104.81%)",
                "black-hover": "#2A293C",
                blue: "linear-gradient(180deg, #4073F6 0%, #1B28B0 100%);",
                green: "linear-gradient(180deg, #4DFB91 0%, #04AA45 100%);",
            }
            
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
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '69em',
        xl: '80em',
        '2xl': '96em',
    }
});
