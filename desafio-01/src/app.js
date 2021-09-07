function App () {
  return (
    <>
      <h1>App</h1>
      <Header />
      <Menu />
      <Content />
      <Sidebar />
      <Footer />
    </>
  )
}

function Header () {
  return (
    <header>
      Header
    </header>
  )
}

function Menu () {
  return (
    <nav>
      Menu
    </nav>
  )
}

function Content () {
  return (
    <main>
      Conteúdo
    </main>
  )
}

function Sidebar () {
  return (
    <aside>
      Sidebar
    </aside>
  )
}

function Footer () {
  return (
    <footer>
      Footer
    </footer>
  )
}

export default App