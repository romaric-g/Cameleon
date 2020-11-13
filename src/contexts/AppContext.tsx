import { createContext } from "react";
import Models from "../types/models";

interface AppContextProps {
    themes: Models.Theme[],
    showPlayer: boolean,
    setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext({
    themes: [],
    showPlayer: false,
    setShowPlayer: () => {}
} as AppContextProps);

export default AppContext;