import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import IconSun from './assets/icons-sun.svg'
import IconLuna from './assets/icons-luna.svg'

export interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        // <button
        //     className={classNames(styles.ThemeSwitcher, {}, [className])}
        //     onClick={toggleTheme}
        // >
        //
        // </button>
        <div
            onClick={toggleTheme}
            className={classNames(styles.ThemeSwitcher, {}, [className, styles[theme]])}
        >
            {theme === Theme.DARK ? <IconLuna /> : <IconSun />}
        </div>

    )
}
