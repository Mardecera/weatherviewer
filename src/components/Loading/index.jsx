import React from 'react'
import styles from './index.module.css'

function Loading() {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading
