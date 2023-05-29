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

  const [comments, setComments] = useState([
    'Post muito bacana, hein?',
  ])

  const [newCommentText, setNewCommentText] = useState('')


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
    // * Pegar o texto para adicionar como comentário do post:
    // console.log(event.target.comment.value)
    // const newCommentText = event.target.comment.value

    // * Dessa forma eu estou sempre de forma fixa adicionando apenas 3 comentários:
    // * setComments([1, 2, 3, 4])
    setComments([...comments, newCommentText])

    // * Limpar a textarea
    // event.target.comment.value = ''

    // * Utilizando programação declarativa para limpar o textarea
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {/* 
        * Percorrendo o array comment criado acima e retornando o componente Comment para cada valor inserido na variável;
        * O useState está adicionando um valor a mais na variável;
        */}
        {comments.map(comment => {
          return (
            <Comment
              key={content}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article >
  )
}