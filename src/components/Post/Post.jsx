import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/96757357?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Edgar Faria Barbosa</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime="">Publicado há: </time>
            </header>
        </article>
    )
}