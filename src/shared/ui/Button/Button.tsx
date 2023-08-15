import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
    LINK = 'link',
    PRIMARY = 'primary',
    BORDER = 'border',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.PRIMARY,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
