import React  from 'react';
import {Counter} from "./Counter";
import '../styles/index.css';
import {useTheme} from "../assets/theme/useTheme";



const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            TEST
            <Counter />
            <button onClick={toggleTheme}>THEME</button>
        </div>
    );
};

export default App;