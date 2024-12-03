import { Header } from './components/Header/Header';
import styles from './App.module.css'
import { Post } from './components/Post/Post';
import { SideBar } from './components/SideBar/SideBar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/112516752?v=4",
      name: "João Pedro",
      role: "Software Engineer"
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      { type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 " },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2024-11-23 11:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandas",
      role: "CTO @ Rocketset"
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      { type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 " },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2024-11-25 21:00:00")
  }
]
function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {
            posts.map((post) => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>

  )
}

export default App
