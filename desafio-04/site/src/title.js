import styled from 'styled-components'

const Heading1 = styled.h1``

function Heading2 ({ children }) {
  return (
    <h2 className='content-heading'>{children}</h2>
  )
}

function Heading3 ({ children }) {
  return (
    <h3 className='content-heading'>{children}</h3>
  )
}

function Heading4 ({ children }) {
  return (
    <h4 className='content-heading'>{children}</h4>
  )
}

function Heading5 ({ children }) {
  return (
    <h5 className='content-heading'>{children}</h5>
  )
}

function Heading6 ({ children }) {
  return (
    <h6 className='content-heading'>{children}</h6>
  )
}

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 }