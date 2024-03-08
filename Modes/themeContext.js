import {createContext, useContext} from "react" ;

const themeContext = createContext();

export const themeProvider = themeContext.Provider;

export const useTheme = () => {
    return useContext(themeContext);
} 
