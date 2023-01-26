import React, { useEffect, useState } from "react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem, Icon } from "@chakra-ui/react"
import { ReactComponent as en } from "../../assets/flags/en.svg"
import { ReactComponent as es } from "../../assets/flags/es-ES.svg"
import { ReactComponent as pt } from "../../assets/flags/pt-BR.svg"
import { I18N_STORAGE_KEY } from "../../i18n"
import { useTranslation } from "react-i18next"


const options = [
    {
        value: "enUS",
        displayName: "EN",
        flag: en,
    },
    {
        value: "ptBR",
        displayName: "PT",
        flag: pt,
    },
    {
        value: "es",
        displayName: "ES",
        flag: es,
    },
]

const updateLocale = (locale: string)=>{
    localStorage.setItem(I18N_STORAGE_KEY, locale)
}

const ChooseLanguage = (textColor: any) => {
    const { i18n } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState<{
        value: string;
        displayName: string;
        flag: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>
    }>()
    const handleChangeLanguage = (option: {
        value: string;
        displayName: string;
        flag: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>
    }) => {
        updateLocale(option.value)
        i18n.changeLanguage(option.value)
        setSelectedLanguage(option)
    }
    useEffect(() => {
        let language = localStorage.getItem(I18N_STORAGE_KEY) || "en"
        setSelectedLanguage(options.find(option => option.value === language))
    }, [selectedLanguage, setSelectedLanguage])

    return <>
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton
                        isActive={isOpen}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        leftIcon={<Icon as={selectedLanguage?.flag} boxSize={"20px"} />}
                        fontSize={["x-small", "small", "sm"]}
                        fontWeight={"400"}
                        bg="transparent"
                        color={textColor.textColor? textColor.textColor : "#323232"}
                        _hover={{}}
                        _active={{}}
                    >
                        {selectedLanguage?.displayName}
                    </MenuButton>
                    <MenuList bg={"#3DDCFC"} backdropFilter={"blur(25px)"} textAlign={"right"}>
                        {options.map((item, key) => {
                            return <MenuItem key={key} onClick={e => handleChangeLanguage(item)}>
                                <Icon as={item.flag} boxSize={"20px"} />
                                {item.displayName}
                            </MenuItem>
                        })}
                    </MenuList>
                </>
            )}
        </Menu>
    </>
}

export default ChooseLanguage