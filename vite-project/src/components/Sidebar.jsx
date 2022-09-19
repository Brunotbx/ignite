import styles from './Sidebar.module.css';
import { Moon } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
        alt="imagem"
      />

      <div className={styles.profile}>
        <Avatar
          src={
            "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
          } 
        />
        <strong>Bruno Leonardo</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <Moon size={22} />
          Edit profile
        </a>
      </footer>
    </aside>
  );
}
