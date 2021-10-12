import styled from 'styled-components'

const DivMessage = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #f00;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`

function ErrorMessage({ message }) {
  return (
    <DivMessage>{message}</DivMessage>
  )
}

export { ErrorMessage }