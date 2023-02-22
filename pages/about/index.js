import styles from '../../styles/About.module.css'

const About = () => {
    
    return <div className={styles.body}>
        <main className={styles.container}>
        <p className={styles.p}>Hello 👋 I'm</p>
        <section className={styles.animation}>
            <div className={styles.first}><div>Yura Alaverdyan</div></div>
            <div className={styles.second}><div>Web Developer</div></div>
        </section>
    </main>
    </div>
}

export default About