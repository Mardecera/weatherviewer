import { Link } from 'react-router-dom'
import { error404 } from '../../assets'
import styles from './index.module.css'

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <img src={error404} alt="404" />
                <p>Page not found!</p>
                <Link
                    className={styles.goToHome}
                    to="/"
                    aria-label="go to Home"
                >
                    <span className="icon-arrow-left"></span>
                    <p>go to Home</p>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound
