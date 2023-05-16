import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-br', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          {/* <Avatar hasBorder src="https://github.com/diego3g.png" /> */}
          {/* <Avatar hasBorder={true} src="https://github.com/diego3g.png" /> */}
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="08 de Maio às 07:03" dateTime="2023-05-08 07:03:00">{publishedDateFormatted}</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
          {/*
                * {' '} é utilizado para adicionar espaço real entre os elementos;
                * Não é uma boa prática. 
            */}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article >
  )
}