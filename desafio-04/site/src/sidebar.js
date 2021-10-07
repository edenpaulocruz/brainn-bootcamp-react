import { Heading1 } from "./title"

function Sidebar ({ sidebarContent, handleClick }) {
  return (
    <aside className='aside'>
      <Heading1>Our team</Heading1>
      <ul>
        {sidebarContent.map((item) => (
          <li key={item.id}>
            <button className='aside-link' onClick={(e) => {
              e.preventDefault()
              handleClick(item.id)
            }}>{item.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export { Sidebar }