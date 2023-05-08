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

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉 <a href="">jane.design/doctorcare</a></p>

          <p>
            <a href="">#novoprojeto</a>
            <a href="">#nlw</a>
            <a href="">#rocketseat</a>
          </p>
        </div>
      </header >
    </article >
  )
}