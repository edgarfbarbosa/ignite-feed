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

        <time title="08 de Maio às 07:03" dateTime="2023-05-08 07:03:00">Publicado há 1h</time>
      </header>
    </article>
  )
}