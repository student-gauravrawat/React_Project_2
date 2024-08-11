import styles from './Navigation.module.css'


export default function Navigation() {

    return (
        <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/image/logo.png" alt="img" />
        </div>

        <ul>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        </nav>
    )
}