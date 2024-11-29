import { useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comments/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
export const Post = ({ author, publishedAt, content }) => {


    const publishedDateFormatter = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState(["Comentário bacana hein? "]);
    const [newCommentText, setNewCommentText] = useState('');

    const handleCreateNewComment = () => {
        event.preventDefault();
        const newComment = event.target.comment.value;
        setComments([...comments, newComment]);
        setNewCommentText('');
    }

    const handleNewCommentChange = () => {
        setNewCommentText(event.target.value)
    }


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatter} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {
                    content.map((line) => {
                        if (line.type === "paragraph") {
                            return <p>{line.content}</p>
                        } else if (line.type === "link") {
                            return <p><a href='#'>{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    onChange={handleNewCommentChange}
                    name='comment'
                    placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment content={comment} />
                ))}
            </div>
        </article>

    )
}