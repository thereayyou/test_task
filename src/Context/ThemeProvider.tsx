import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import "../App.css";

type ThemeColor = "light" | "dark";

type ThemeContext = { theme: ThemeColor; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeColor>("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const context = useMemo(
      () => ({
        theme,
        toggleTheme,
      }),
      [theme]
  );

  return (
      <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};
