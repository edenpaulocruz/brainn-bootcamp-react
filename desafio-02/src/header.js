import * as title from './title'
import { Menu } from './menu'
import { Button } from './button'

function Header () {
  return (
    <header className='header'>
      <title.Heading1>App</title.Heading1>
      <Menu />
      <Button kind='secondary' text='Say Hello' />
    </header>
  )
}

export { Header }