import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
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
      avatarUrl: 'https://pbs.twimg.com/profile_images/1744065252348624896/TiaX0B0z_400x400.jpg', 
      name: 'Miguel Arganoz',
      role: 'Programador'
    },
      content: [
      { type: 'paragraph', content: 'Mára Calë. A Ariana Grande é muito diva!' },
      { type: 'paragraph', content: 'Ouvindo o album #Eternal Sunshine, alguem avisa que ela tem os vocais impecaveis? '},
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
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
             )
          })}
        </main>
      </div>
    </div>
  )
}
