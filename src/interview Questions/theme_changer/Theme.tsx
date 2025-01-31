import { createContext, useContext, ReactNode, useState } from "react";

// Define the context type
interface ThemeType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeType | undefined>(undefined);

// Provider Component
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState("white");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "white" ? "black" : "white"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Theme Component
const Theme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("ThemeContext is not provided");
    }

    const { theme, toggleTheme } = context;

    return (
        <div style={{ backgroundColor: theme, height: "100vh", color: theme === "white" ? "black" : "white" }}>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
};


export { ThemeProvider, Theme };
