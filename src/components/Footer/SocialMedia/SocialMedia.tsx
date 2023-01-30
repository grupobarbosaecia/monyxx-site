import { Box, Image } from "@chakra-ui/react";

const SocialMedia: React.FC<{ icon: string }> = (props) => {
    return (
        <Box
            display={"flex"}
            {...props}
            bg={"gray.500"}
            rounded={"full"}
            w={"40px"}
            h={"40px"}
            role="group"
            alignItems={"center"}
            justifyContent={"center"}
            _hover={{
                cursor: "pointer",
            }}
        >
            <Image
                src={props.icon}
                w={"60%"}
                height={"60%"}
                fill={"gray.500 !important"}
                zIndex={5}
                transition={"all 300ms ease-in-out"}
                _groupHover={{
                    transform: "scale(1.4) rotate(-5deg)",
                }}
            />
        </Box>
    );
};

export default SocialMedia;
