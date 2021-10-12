import styled from 'styled-components'

const Main = styled.main`
  width: 80%;
  min-width: 20rem;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`

const MemberName = styled.h1`
  width: 100%;
  margin-bottom: 0;
  background-color: var(--color-border);
	padding: 1rem 0 0 1rem;
  line-height: 1;
`

const MemberPosition = styled.h2`
  width: 100%;
  padding: 0 0 1rem 1rem;
	background-color: var(--color-border);
	font-weight: lighter;
	color: var(--color-accent);
`
const MemberAvatar = styled.div`
  width: 10rem;
  margin-right: 2rem;

  img {
    width: 100%;
    border-radius: 20px 0;
    border: 5px solid var(--color-border);
  }
`

function Content ({title, content}) {
  return (
    <Main>
      <>
        <MemberName>{title}</MemberName>
        <>{content}</>
      </>
    </Main>
  )
}

export { Content, MemberPosition, MemberAvatar }