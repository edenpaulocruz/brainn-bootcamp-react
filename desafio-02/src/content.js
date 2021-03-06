import { Heading1 } from './title'

function Content ({title, content}) {
  return (
    <main className='main'>
      <>
        <Heading1 className="member-name">{title}</Heading1>
        <>{content}</>
      </>
    </main>
  )
}

export { Content }