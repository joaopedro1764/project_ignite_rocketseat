
import { Avatar } from '../avatar/Avatar'
import styles from './SideBar.module.css'
import {PencilLine}  from 'phosphor-react'
export const SideBar = () => {

    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Foto Perfil' />
            <div className={styles.profile}>

                <Avatar src="https://avatars.githubusercontent.com/u/112516752?v=4"/>

                <strong>João Pedro</strong>
                <span>Software Enginer</span>
            </div>
            <footer>
                <a href='#'><PencilLine size={20} />Editar seu perfil</a>
            </footer>
        </aside>
    )
}