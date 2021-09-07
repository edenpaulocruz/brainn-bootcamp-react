import { Header } from './header'
import { Content } from './content'
import { Sidebar } from './sidebar'
import { Footer } from './footer'

function App () {
  return (
    <div className='app'>
      <Header />
      <Content />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App