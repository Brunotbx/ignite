import { Header } from "./components/Header";
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Bruno",
      role: "Web-Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi libero rem quos voluptatum deleniti.",
      },
      { type: "link", content: "link.com.br" },
    ],
    publishedAt: new Date("2022-05-01 15:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Leonardo",
      role: "Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi libero rem quos voluptatum deleniti.",
      },
      { type: "link", content: "link.com.br" },
    ],
    publishedAt: new Date("2022-05-02 16:00:00"),
  },
];

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}