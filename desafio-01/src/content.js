import * as title from './title'
import Button from './button'

function Content () {
  return (
    <main className='main'>
      <title.Heading2>Conteúdo</title.Heading2>
      <Button kind='primary' text='Primary' />
      <Button kind='secondary' text='Secondary' />
    </main>
  )
}

export default Content