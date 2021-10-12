import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './header'
import Title from './title'
import Menu from './menu'
import { ButtonSecondary } from './buttons'
import { Content, MemberAvatar, MemberPosition, MemberDescription } from './content'
import { Sidebar } from './sidebar'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  #root {
    --color-primary: #000;
    --color-secondary: #fff;
    --color-accent: #f36;
    --color-text: #777;
    --color-border: #eee;
    --font-default: 'TTInterfaces',Arial,Helvetica,sans-serif;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: var(--font-default);  
  }  

  body {
    height: 100vh;
  }

  .app {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
  }
`

const members = [
  {
    id: 1,
    title: 'Fernando Daciuk',
    content:
      <>
        <MemberPosition>Tech Lead | Software Developer</MemberPosition>
        <MemberAvatar>
          <img src='https://pbs.twimg.com/profile_images/1415288716415877121/zK7lC5Ns.jpg' alt='Fernando Daciuk' />
        </MemberAvatar>
        <MemberDescription>
          <p>Teacher and web developer, focused on JavaScript, both on client and server (with Node.js).</p>
          <h3>Experience</h3>
          <ul>
            <li className='experience'>
              <h4>Founder &amp; Teacher</h4>
              queroser.ninja
            </li>
            <li className='experience'>
              <h4>Founder &amp; CTO</h4>
              Lukin Co.
            </li>
          </ul>
        </MemberDescription>
      </>,
  },
  {
    id: 2,
    title: 'Diego Moretti',
    content:
      <>
        <MemberPosition>Developer Relations</MemberPosition>
        <MemberAvatar>
          <img src='https://pbs.twimg.com/profile_images/1432437836800794636/_TEdKmBy_400x400.jpg' className='avatar' alt='Diego Moretti'/>
        </MemberAvatar>
        <MemberDescription>
          <p>Tech, Web &amp; Community specialist.</p>
          <h3>Experience</h3>
          <ul>
            <li className="experience">
              <h4>Co-Creator &amp; Member</h4>
              Front-End Brasil
            </li>
            <li className="experience">
              <h4>Founder &amp; Organizer</h4>
              Front in Floripa
            </li>
          </ul>
        </MemberDescription>
      </>
  },
  {
    id: 3,
    title: 'Adeonir Kohl',
    content:
      <>
        <MemberPosition>Front-end Developer</MemberPosition>
        <MemberAvatar>
          <img src='https://pbs.twimg.com/profile_images/1369253967939657729/q6bEIJ7A_400x400.jpg' className='avatar' alt='Adeonir Kohl'/>
        </MemberAvatar>
        <MemberDescription>
          <p>Web developer with background in Graphic Design and Photography.</p>
          <h3>Experience</h3>
          <ul>
            <li className="experience">
              <h4>Web Developer and Visual Designer</h4>
              Freelance
            </li>
            <li className="experience">
              <h4>Lead UI Engineer</h4>
              Joyjet Digital Space Agency
            </li>
          </ul>
        </MemberDescription>
      </>
  },
  {
    id: 4,
    title: 'Amorésio de Souza',
    content:
    <>
      <MemberPosition>Back-end Product Developer</MemberPosition>
      <MemberAvatar>
        <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHEvTjMNVNe7g/profile-displayphoto-shrink_800_800/0/1623081943299?e=1639008000&v=beta&t=CWuRsGOlYzAqj86haqG-yRbe7C3BFVPpEF62S-Dblk8' className='avatar' alt='Amorésio de Souza' />
      </MemberAvatar>
      <MemberDescription>
        <p>Computer Science Academic. Passionate about programming.</p>
        <h3>Experience</h3>
        <ul>
          <li className="experience">
            <h4>Analista Programador</h4>
            Grupo Cometa
          </li>
          <li className="experience">
            <h4>Estagiário</h4>
            Unemat Oficial - RISC Redes Inteligentes e Soluções Criativas
          </li>
        </ul>
      </MemberDescription>
    </>
  },
  {
    id: 5,
    title: 'Pedro Azevedo',
    content:
    <>
      <MemberPosition>Front-End Developer | JavaScript | React Native | React</MemberPosition>
      <MemberAvatar>
        <img src='https://pbs.twimg.com/profile_images/1392878203606380545/ZYa3HMEt_400x400.jpg' className='avatar' alt="Pedro Azevedo" />
      </MemberAvatar>
      <MemberDescription>
        <p>Always willing to learn new technologies to improve my knowledge skills.</p>
        <h3>Experience</h3>
        <ul>
          <li className="experience">
            <h4>Mobile Developer | React-Native</h4>
            Midway
          </li>
          <li className="experience">
            <h4>JavaScript Developer | React | React-Native</h4>
            Concrete Solutions
          </li>
        </ul>
      </MemberDescription>
    </>
  },
  {
    id: 6,
    title: 'Eden Paulo Cruz',
    content:
    <>
      <MemberPosition>Front-End Developer | JavaScript | React</MemberPosition>
      <MemberAvatar>
        <img src='https://pbs.twimg.com/profile_images/1252312349882626048/ZU7vOk2W_400x400.jpg' className='avatar' alt="Eden Paulo Cruz" />
      </MemberAvatar>
      <MemberDescription>
        <p>Eternal apprentice! Passionate about programming and always ready to help.</p>
        <h3>Experience</h3>
        <ul>
          <li className="experience">
            <h4>Web Developer</h4>
            Freelancer
          </li>
          <li className="experience">
            <h4>IT Technician</h4>
            Self Employee
          </li>
        </ul>
      </MemberDescription>
    </>
  }
]

function App () {
  const [title, setTitle] = useState(members[0].title)
  const [content, setContent] = useState(members[0].content)

  function handleClick(id) {
    const memberActive = members.find((member) => member.id === id)
    setTitle(memberActive.title)
    setContent(memberActive.content)
  }

  return (
    <div className='app'>
      <GlobalStyle />
      <Header>
        <Title>App</Title>
        <Menu />
        <ButtonSecondary>Say Hello</ButtonSecondary>
      </Header>
      <Content 
        title={title}
        content={content}
      />
      <Sidebar sidebarContent={members} handleClick={handleClick} />
      <Footer>Some rights reserved.</Footer>
    </div>
  )
}

export default App