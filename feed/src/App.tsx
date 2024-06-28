import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  { 
    id: 1,
    author: { 
      avatarUrl: 'https://pbs.twimg.com/profile_images/1779720956740526080/cKWcz8vK_400x400.jpg', 
      name: 'Gabriel Migliorini',
      role: 'Futuro DevOps'
    },
      content: [
      { type: 'paragraph', content: 'Aprendendo #kubernetes hoje enquanto escuto Taylor Swift.' },
      { type: 'paragraph', content: 'eu vou com calma, um dia de cada vez, não importa quanto tempo demora! '},
    ],
      publishedAt: new Date('2024-04-21 15:30:23'),
  },

    { 
    id: 2,
    author: { 
      avatarUrl: 'https://avatars.githubusercontent.com/u/28929274?s=280&v=4', 
      name: 'RocketSeat',
      role: 'Programador'
    },
      content: [
      { type: 'paragraph', content: 'Mais um projeto concluido da RocketSeat do curso de ReactJS' },
      { type: 'paragraph', content: 'Dessa vez começamos com um projeto de criar um feed de atividades, imitando uma rede social! '},
    ],
      publishedAt: new Date('2024-04-20 15:30:23'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => { 
              return ( 
                  <Post 
                    key={post.id}
                    post={post}
                  />
             )
          })}
        </main>
      </div>
    </div>
  )
}
