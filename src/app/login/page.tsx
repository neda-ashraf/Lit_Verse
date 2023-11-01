import styles from "./Login.module.css"
import { Button } from '@chakra-ui/react'

export default function Login() {
    return (
        <div className={styles.bt}>
            <Button className={styles.log}>Login</Button>
        </div>
    )
}