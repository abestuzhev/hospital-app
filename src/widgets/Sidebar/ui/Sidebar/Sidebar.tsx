import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import IconChevronBoldLeft from '../../assets/icons/icon-chevron-bold-left.svg'
import IconChevronBoldRight from '../../assets/icons/icon-chevron-bold-right.svg'
export interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: isCollapsed }, [className])}>

            <div className={classNames(styles.SidebarFooter, {}, [className])}>
                {!isCollapsed && <ThemeSwitcher />}
                <Button theme={ThemeButton.BORDER} className={styles.SidebarBack} onClick={() => { setIsCollapsed(prev => !prev) }}>
                    {!isCollapsed ? <IconChevronBoldLeft /> : <IconChevronBoldRight />}
                </Button>
            </div>
        </div>
    )
}
