import { Heading1 } from "./title"

function Sidebar ({ sidebarContent }) {
  return (
    <aside className='aside'>
      <Heading1>Our team</Heading1>
      {sidebarContent.map((item) => (
        <>
          <button className='aside-link'>{item.title}</button>
        </>
      ))}
    </aside>
  )
}

export { Sidebar }