import { Heading2 } from "./title"

function Sidebar ({ content }) {
  return (
    <aside className='aside'>
      <Heading2>Our team</Heading2>
      {content.map((item) => (
        <>
          <button className='aside-link'>{item.title}</button>
        </>
      ))}
    </aside>
  )
}

export { Sidebar }