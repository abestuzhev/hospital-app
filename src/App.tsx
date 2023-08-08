import {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";
import Loader from "./components/Loader/Loader";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./theme/ThemeContext";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleThem = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return (
        <div className={classNames('app', {}, [theme])}>

            <Suspense fallback={<Loader />}>
                <div className="header">
                    <div className={'nav'}>
                        <Link to={'/'}>Главная</Link>
                        <Link to={'/about'}>О сайте</Link>

                    </div>
                    <button onClick={toggleThem}>Сменить тему</button>
                </div>

                <Routes>
                    <Route path={'/about'} element={<AboutAsync />}/>
                    <Route path={'/'} element={<MainAsync />}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;