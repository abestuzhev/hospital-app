import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import styles from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={classNames(styles.Menu)}>
                <AppLink to={'/'}>Главная</AppLink>
                <AppLink to={'/about'}>О сайте</AppLink>
            </div>
            <div className={classNames(styles.Operation)}>

                <Button>Войти</Button>
            </div>

        </div>
    )
}
