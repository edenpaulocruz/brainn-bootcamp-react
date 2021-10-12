import styled from 'styled-components'

const Button = styled.button`
  width: 8rem;
  padding: .7rem;
  border: 2px solid var(--color-accent);
  box-shadow: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`

const ButtonPrimary = styled(Button)`
  background-color: var(--color-accent);

  &:hover {
    background-color: transparent;
    color: var(--color-accent);
  }
`

const ButtonSecondary = styled(Button)`
  background-color: transparent;
  color: var(--color-accent);

  &:hover {
    background-color: var(--color-accent);
    color: var(--color-secondary);
  }
`

export { ButtonPrimary, ButtonSecondary }