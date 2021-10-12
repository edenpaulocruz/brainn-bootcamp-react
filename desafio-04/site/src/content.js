import styled from 'styled-components'

const Main = styled.main`
  width: 80%;
  min-width: 20rem;
  height: fit-content;
  padding: 2rem;
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
  margin-bottom: 1rem;
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

const MemberDescription = styled.div`
  width: calc(100% - 12rem);

  h3 {
    margin-bottom: .75rem;
  }

  h3, p {
    font-size: 1.25rem;
  }
  
  h4 {
    font-size: 1rem;
    margin-bottom: .25rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }  

  li {
    margin: 0 0 1rem 1rem;
    list-style: square;
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

export { Content, MemberPosition, MemberAvatar, MemberDescription }