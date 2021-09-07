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

function Header () {
  return (
    <header className='header'>
      <Title />
      <Menu />
    </header>
  )
}

function Menu () {
  return (
    <nav className='nav'>
      Menu
    </nav>
  )
}

function Title () {
  return (
    <h1>App</h1>
  )
}

function Content () {
  return (
    <main className='main'>
      Conteúdo
    </main>
  )
}

function Sidebar () {
  return (
    <aside className='aside'>
      Sidebar
    </aside>
  )
}

function Footer () {
  return (
    <footer className='footer'>
      Footer
    </footer>
  )
}

export default App