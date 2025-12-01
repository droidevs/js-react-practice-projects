import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage"
import './theme.css';



export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToogleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        console.log(theme);
    },[theme]);

    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Hello World !</p>
            <button onClick={handleToogleTheme}>Change Theme</button>
        </div>
    </div>
}