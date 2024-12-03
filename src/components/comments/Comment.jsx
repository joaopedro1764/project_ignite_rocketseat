import { Avatar } from '../avatar/Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
export const Comment = ({ content, onDeleteComment }) => {

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    return (

        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/112516752?v=4" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>João Pedro</strong>
                            <time title='Publicado em 08 de maio de 2024' dateTime='08/10/2024 - 08:55:90'>Cerca de 1 hora atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'><Trash size={24} /></button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button><ThumbsUp size={20} />Aplaudir <span>20</span></button>
                </footer>

            </div>

        </div>
    )

}