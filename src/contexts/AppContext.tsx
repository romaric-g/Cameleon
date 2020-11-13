import { createContext } from "react";
import Models from "../types/models";

const ThemeContext = createContext({
    themes: [] as Models.Theme[]
});

export default ThemeContext;