import { Heading2 } from "./title"

function Sidebar ({ content }) {
  return (
    <aside className='aside'>
      <Heading2>Our team</Heading2>
      {content.map((item) => (
        <>
          <a href="http:" className='aside-link'>{item.title}</a>
        </>
      ))}
    </aside>
  )
}

export { Sidebar }