export interface MainPageI {
    setAboutMe: React.Dispatch<React.SetStateAction<boolean>>;
    setPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
    setContacts: React.Dispatch<React.SetStateAction<boolean>>;
    setMore: React.Dispatch<React.SetStateAction<boolean>>;
    aboutMe: boolean;
    portfolio: boolean;
    contacts: boolean;
    more: boolean;
}

export interface NavbarI{
    setActiveButton: (button: string) => void;
    activeButton: string;
}