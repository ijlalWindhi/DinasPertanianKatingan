import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Poppins, sans-serif",
        body: "Poppins, sans-serif",
    },
    colors: {
        primary: {
            100: "#06393A",
            200: "#085657",
            300: "#CEE3E3",
            400: "#103738",
            500: "#E7F1F2",
            600: "#0B7274",
            700: "#3C8E90",
        },
        secondary: {
            100: "#9DC7C7",
        },
    },
});

export default theme;
