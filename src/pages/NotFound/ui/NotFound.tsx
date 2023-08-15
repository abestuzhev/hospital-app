import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotFound.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'

export interface NotFoundProps {
    className?: string
}

export const NotFound = ({ className }: NotFoundProps) => {
    return (
        <div className={classNames(styles.NotFound, {}, [className])}>
            <div className={classNames(styles.NotFoundBody)}>
                <div className={classNames(styles.NotFoundText)}>
                    Страница не найдена
                </div>
                <div className={classNames(styles.NotFoundFooter)}>
                    <AppLink to={'/'}>На главную</AppLink>
                </div>
            </div>
        </div>
    )
}
