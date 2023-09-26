import styles from './border.module.scss'

export const Border = (children: any) => {
    return (
        <div>
            <div className={styles.firstBorderContainer}>
                hello
            </div>
            <div className={styles.secondBorderContainer}> there</div>
        </div>
    )
}
