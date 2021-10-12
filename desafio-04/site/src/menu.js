import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  text-align: center;
`

const NavItem = styled.li`
  display: inline-block;
`

const NavLink = styled.a`
  display: block;
  padding: 0 1.5rem;
  color: inherit;
  font-weight: bold;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    color: #f36;
  }
`

export default function Menu() {
  return (
    <Nav>
      <ul>
        <NavItem>
          <NavLink>What we do</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>How we can help</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>How we work</NavLink>
        </NavItem>
      </ul>
    </Nav>
  )
}
