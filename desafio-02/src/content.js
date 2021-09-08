import * as title from './title'
import { Button } from './button'

function Content () {
  return (
    <main className='main'>
      <title.Heading2>Conteúdo</title.Heading2>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque odio facilis officia deleniti quod sequi fuga et porro molestiae modi aperiam repellendus nesciunt dolorem, quisquam voluptatibus sapiente eaque laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque odio facilis officia deleniti quod sequi fuga et porro molestiae modi aperiam repellendus nesciunt dolorem, quisquam voluptatibus sapiente eaque laboriosam.</p>
      <title.Heading3>Conteúdo 2</title.Heading3>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque odio facilis officia deleniti quod sequi fuga et porro molestiae modi aperiam repellendus nesciunt dolorem, quisquam voluptatibus sapiente eaque laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque odio facilis officia deleniti quod sequi fuga et porro molestiae modi aperiam repellendus nesciunt dolorem, quisquam voluptatibus sapiente eaque laboriosam.</p>
      <title.Heading4>Conteúdo 3</title.Heading4>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque odio facilis officia deleniti quod sequi fuga et porro molestiae modi aperiam repellendus nesciunt dolorem, quisquam voluptatibus sapiente eaque laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque odio facilis officia deleniti quod sequi fuga et porro molestiae modi aperiam repellendus nesciunt dolorem, quisquam voluptatibus sapiente eaque laboriosam.</p>
      <title.Heading5>Conteúdo 4</title.Heading5>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque odio facilis officia deleniti quod sequi fuga et porro molestiae modi aperiam repellendus nesciunt dolorem, quisquam voluptatibus sapiente eaque laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque odio facilis officia deleniti quod sequi fuga et porro molestiae modi aperiam repellendus nesciunt dolorem, quisquam voluptatibus sapiente eaque laboriosam.</p>
      <Button kind='primary' text='Diga olá' />
    </main>
  )
}

export { Content }