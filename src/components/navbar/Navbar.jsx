import React from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Icon,
    Image,
} from "@chakra-ui/react";
import { AlignCenter, X, ChevronUp, ChevronDown, Home } from "react-feather";
import { Link } from "react-router-dom";
import { dataNavbar } from "./fragment/DataNavbar";
import Logo from "../../assets/images/logo.png";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            w={"100vw"}
            bg={"primary.500"}
            px={[4, 20]}
            py={2}
            zIndex={10}
            boxShadow={"1px 5px 24px -12px rgba(0, 0, 0, 0.3);"}
            position={"fixed"}
        >
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton
                    size={"md"}
                    p={2}
                    icon={isOpen ? <X /> : <AlignCenter />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={2} alignItems={"center"}>
                    <Image src={Logo} w={10} />
                    <Flex flexDir={"column"}>
                        <Text
                            fontWeight={800}
                            fontSize={"sm"}
                            color="primary.100"
                        >
                            Dinas Pertanian, Pangan & Perikanan
                        </Text>
                        <Text
                            fontWeight={800}
                            fontSize={"sm"}
                            color="primary.600"
                        >
                            Kabupaten Katingan
                        </Text>
                    </Flex>
                </HStack>
                <HStack
                    as={"nav"}
                    spacing={10}
                    fontWeight={"semibold"}
                    fontSize={"sm"}
                    textColor={"gray.500"}
                    display={{ base: "none", md: "flex" }}
                >
                    <Link to="/">
                        <Icon
                            as={Home}
                            w={7}
                            h={7}
                            _hover={{ textColor: "primary.100" }}
                        />
                    </Link>
                    {dataNavbar.map((item, index) => {
                        return (
                            <Popover
                                trigger={"hover"}
                                placement={"bottom-start"}
                                key={index}
                            >
                                <PopoverTrigger>
                                    <Link to={item.link} cursor="pointer">
                                        <Flex
                                            alignItems={"center"}
                                            rounded={"md"}
                                            p={1}
                                            _hover={{
                                                backgroundColor: "primary.300",
                                            }}
                                        >
                                            <Text
                                                px={2}
                                                py={1}
                                                _activeLink={{
                                                    textColor: "blue.500",
                                                }}
                                            >
                                                {item.label}
                                            </Text>
                                            {item.children && (
                                                <Icon
                                                    as={ChevronDown}
                                                    w={5}
                                                    h={5}
                                                />
                                            )}
                                        </Flex>
                                    </Link>
                                </PopoverTrigger>

                                {item.type === "normal" && item.children && (
                                    <PopoverContent
                                        zIndex={10}
                                        bg={"primary.100"}
                                        color={"white"}
                                        boxShadow={
                                            "1px 5px 24px -12px rgba(0, 0, 0, 0.3);"
                                        }
                                        borderRadius={"md"}
                                        border={"none"}
                                        p={2}
                                        maxWidth={"md"}
                                        overflow={"auto"}
                                        fontSize={"sm"}
                                        fontWeight={"normal"}
                                    >
                                        {item.children.map((item, index) => {
                                            return (
                                                <Link
                                                    to={item.href}
                                                    key={index}
                                                >
                                                    <Text
                                                        px={2}
                                                        py={1}
                                                        _hover={{
                                                            textColor:
                                                                "primary.300",
                                                        }}
                                                    >
                                                        {item.label}
                                                    </Text>
                                                </Link>
                                            );
                                        })}
                                    </PopoverContent>
                                )}

                                {item.type === "icon" && item.children && (
                                    <PopoverContent
                                        zIndex={10}
                                        bg={"primary.100"}
                                        color={"white"}
                                        boxShadow={
                                            "1px 5px 24px -12px rgba(0, 0, 0, 0.3);"
                                        }
                                        borderRadius={"md"}
                                        border={"none"}
                                        py={4}
                                        px={2}
                                        maxWidth={"md"}
                                        overflow={"auto"}
                                        fontSize={"sm"}
                                        fontWeight={"normal"}
                                    >
                                        <Box
                                            display={"flex"}
                                            alignItems={"center"}
                                        >
                                            <Image src={Logo} w={10} />
                                            <Flex
                                                flexDir={"column"}
                                                fontWeight={800}
                                                ml={2}
                                            >
                                                <Text fontSize={"sm"}>
                                                    Dinas Pertanian, Pangan &
                                                    Perikanan
                                                </Text>
                                                <Text fontSize={"sm"}>
                                                    Kabupaten Katingan
                                                </Text>
                                            </Flex>
                                        </Box>
                                        <Text
                                            fontWeight={"semibold"}
                                            fontSize={"sm"}
                                            mt={6}
                                        >
                                            Kontak Kami
                                        </Text>
                                        {item.children.map((item, index) => {
                                            return (
                                                <Link
                                                    to={item.href}
                                                    key={index}
                                                >
                                                    <Flex
                                                        alignItems={"center"}
                                                        _hover={{
                                                            textColor:
                                                                "primary.300",
                                                        }}
                                                        p={2}
                                                    >
                                                        <Icon
                                                            as={item.icon}
                                                            w={5}
                                                            h={5}
                                                            mr={2}
                                                        />
                                                        <Flex
                                                            flexDir={"column"}
                                                            px={2}
                                                        >
                                                            <Text
                                                                fontWeight={
                                                                    "semibold"
                                                                }
                                                            >
                                                                {item.label}
                                                            </Text>
                                                            <Text>
                                                                {
                                                                    item.description
                                                                }
                                                            </Text>
                                                        </Flex>
                                                    </Flex>
                                                </Link>
                                            );
                                        })}
                                    </PopoverContent>
                                )}
                            </Popover>
                        );
                    })}
                </HStack>
            </Flex>
            {/* {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {dataNavbar.map((item, index) => {
                            return (
                                <Link
                                    to={item.link}
                                    key={index}
                                    smooth={true}
                                    cursor={"pointer"}
                                >
                                    <Flex alignItems={"center"}>
                                        <Text px={2} py={1} rounded={"md"}>
                                            {item.label}
                                        </Text>
                                        {item.children && (
                                            <Icon
                                                as={ChevronUp}
                                                transition={
                                                    "all .25s ease-in-out"
                                                }
                                                transform={
                                                    isOpen
                                                        ? "rotate(180deg)"
                                                        : ""
                                                }
                                                w={6}
                                                h={6}
                                            />
                                        )}
                                    </Flex>
                                    <Collapse
                                        in={isOpen}
                                        animateOpacity
                                        style={{ marginTop: "0!important" }}
                                    >
                                        <Stack
                                            mt={2}
                                            pl={4}
                                            borderLeft={1}
                                            borderStyle={"solid"}
                                            borderColor={useColorModeValue(
                                                "gray.200",
                                                "gray.700"
                                            )}
                                            align={"start"}
                                        >
                                            {item.children &&
                                                item.children.map(
                                                    (item, index) => {
                                                        return (
                                                            <Link
                                                                to={item.href}
                                                                key={index}
                                                            >
                                                                <Text
                                                                    px={2}
                                                                    py={1}
                                                                    rounded={
                                                                        "md"
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Text>
                                                            </Link>
                                                        );
                                                    }
                                                )}
                                        </Stack>
                                    </Collapse>
                                </Link>
                            );
                        })}
                    </Stack>
                </Box>
            ) : null} */}
        </Box>
    );
}
