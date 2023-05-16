import styles from './Post.module.css'

// * Import do useState:
import { useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'


export function Post({ author, publishedAt, content }) {
  // useState:

  // * Primeiro parâmetro: valor inicial da variável;
  // * Segundo parâmetro: função para alterar o valor;

  // const comments = useState([1, 2], function (){})


  // * Essa é a forma destruturada de criar um useState:

  const [comments, setComments] = useState(
    [1, 2]
  )


  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(
    publishedAt,
    {
      locale: ptBR,
      addSuffix: true
    })

  function handleCreateNewComment() {
    event.preventDefault()

    // * Dessa forma eu estou sempre de forma fixa adicionando apenas 3 comentários:
    // * setComments([1, 2, 3, 4])

    setComments([...comments, comments.length + 1])

    console.log(comments.length)
  }

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

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {
          content.map(item => {
            if (item.type === 'paragraph') {
              return <p>{item.content}</p>
            } else if (item.type === 'link') {
              return <p><a href="#">{item.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {/* 
        * Percorrendo o array comment criado acima e retornando o componente Comment para cada valor inserido na variável;
        * O useState está adicionando um valor a mais na variável;
        */}
        {comments.map(item => {
          return <Comment />
        })}
      </div>
    </article >
  )
}