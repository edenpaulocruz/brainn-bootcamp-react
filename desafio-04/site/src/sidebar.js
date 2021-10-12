import styled from "styled-components"
import { Heading1 } from "./title"

const Aside = styled.aside`
  width: 20%;
  height: 85vh;
  min-width: 12.5rem;
  padding: 2rem;
  order: -1;
  background-color: var(--color-border);
`

const AsideLink = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: .5rem 0;
  cursor: pointer;
  border: none;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: var(--color-accent);
  }
`

function Sidebar ({ sidebarContent, handleClick }) {
  return (
    <Aside>
      <Heading1>Our team</Heading1>
      <ul>
        {sidebarContent.map((item) => (
          <li key={item.id}>
            <AsideLink onClick={(e) => {
              e.preventDefault()
              handleClick(item.id)
            }}>{item.title}</AsideLink>
          </li>
        ))}
      </ul>
    </Aside>
  )
}

export { Sidebar }