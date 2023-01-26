import { Box } from "@chakra-ui/react";
import React from "react";


const Opacity: React.FC = () => {
    return <Box bg={"#0C0F44"}>
            <Box paddingY={"5px"} opacity={0.1} w={"100%"} bg={"#0C0F44"}></Box>
            <Box paddingY={"5px"} opacity={0.2} w={"100%"} bg={"#0C0F44"}></Box>
            <Box paddingY={"5px"} opacity={0.3} w={"100%"} bg={"#0C0F44"}></Box>
            <Box paddingY={"5px"} opacity={0.4} w={"100%"} bg={"#0C0F44"}></Box>
            <Box paddingY={"5px"} opacity={0.55} w={"100%"} bg={"#0C0F44"}></Box>
            <Box paddingY={"5px"} opacity={0.7} w={"100%"} bg={"#0C0F44"}></Box>
            <Box paddingY={"5px"} opacity={0.8} w={"100%"} bg={"#0C0F44"}></Box>
            <Box paddingY={"5px"} opacity={0.9} w={"100%"} bg={"#0C0F44"}></Box>
            <Box paddingY={"5px"} opacity={0.9} w={"100%"} bg={"#0C0F44"}></Box>
        </Box>
}

export default Opacity;