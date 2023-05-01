import { Post } from './Post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Edgar Faria Barbosa"
            content="Deserunt dolore nostrud elit voluptate dolor qui amet et commodo irure do amet sit. Ex eu aliqua do occaecat ad cupidatat. Dolore eu velit nulla tempor elit deserunt magna dolor culpa exercitation laborum. Sit laborum minim elit esse ut incididunt adipisicing."
          />
          <Post
            author="Diego Fernandes"
            content="Est incididunt cillum voluptate magna exercitation mollit eu cillum amet ad. Ut nulla aliquip amet consectetur cillum ex cupidatat commodo aliqua et culpa deserunt incididunt. Tempor mollit ipsum non laboris officia ut fugiat irure fugiat deserunt qui sunt minim nisi. Id quis sint eu tempor ea nisi. Reprehenderit dolore enim Lorem exercitation elit incididunt tempor in ex et. Occaecat ullamco esse deserunt nulla mollit aliqua velit."
          />
        </main>
      </div>
    </>
  )
}