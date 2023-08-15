import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ErrorMessagePage.module.scss'

export interface ErrorMessagePageProps {
    className?: string
    text: string
}

export const ErrorMessagePage = ({ className, text }: ErrorMessagePageProps) => {
    return (
        <div className={classNames(styles.ErrorMessagePage, {}, [className])}>
            <div className={classNames(styles.ErrorMessagePageCard, {}, [className])}>
                <div className={classNames(styles.ErrorMessagePageCardTitle)}>Непредвиденная ошибка</div>
                <div>
                    <code>{text}</code>
                </div>
            </div>

        </div>
    )
}
