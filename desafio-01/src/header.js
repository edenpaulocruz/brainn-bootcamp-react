import * as title from "./title"
import Menu from "./menu"

function Header () {
  return (
    <header className='header'>
      <title.Heading1>App</title.Heading1>
      <Menu />
    </header>
  )
}

export default Header