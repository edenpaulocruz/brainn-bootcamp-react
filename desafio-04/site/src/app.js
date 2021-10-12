import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './header'
import * as Title from './title'
import Menu from './menu'
import { ButtonSecondary } from './button'
import { Content } from './content'
import { Sidebar } from './sidebar'
import { Footer } from './footer'

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
        <Title.Heading2 className='member-name'>Tech Lead | Software Developer</Title.Heading2>
        <div className='member-avatar'>
          <img src='https://pbs.twimg.com/profile_images/1415288716415877121/zK7lC5Ns.jpg' className='avatar' alt='Ferando Daciuk' />
        </div>
        <div className='member-description'>
          <p>Teacher and web developer, focused on JavaScript, both on client and server (with Node.js).</p>
          <Title.Heading3>Experience</Title.Heading3>
          <ul>
            <li className='experience'>
              <Title.Heading4>Founder &amp; Teacher</Title.Heading4>
              queroser.ninja
            </li>
            <li className='experience'>
              <Title.Heading4>Founder &amp; CTO</Title.Heading4>
              Lukin Co.
            </li>
          </ul>
        </div>
      </>,
  },
  {
    id: 2,
    title: 'Diego Moretti',
    content:
      <>
        <Title.Heading2>Developer Relations</Title.Heading2>
        <div className='member-avatar'>
          <img src='https://pbs.twimg.com/profile_images/1432437836800794636/_TEdKmBy_400x400.jpg' className='avatar' alt='Diego Moretti'/>
        </div>
        <div className='member-description'>
          <p>Tech, Web &amp; Community specialist.</p>
          <Title.Heading3>Experience</Title.Heading3>
          <ul>
            <li className="experience">
              <Title.Heading4>Co-Creator &amp; Member</Title.Heading4>
              Front-End Brasil
            </li>
            <li className="experience">
              <Title.Heading4>Founder &amp; Organizer</Title.Heading4>
              Front in Floripa
            </li>
          </ul>
        </div>
      </>
  },
  {
    id: 3,
    title: 'Adeonir Kohl',
    content:
      <>
        <Title.Heading2>Front-end Developer</Title.Heading2>
        <div className='member-avatar'>
          <img src='https://pbs.twimg.com/profile_images/1369253967939657729/q6bEIJ7A_400x400.jpg' className='avatar' alt='Adeonir Kohl'/>
        </div>
        <div className='member-description'>
          <p>Web developer with background in Graphic Design and Photography.</p>
          <Title.Heading3>Experience</Title.Heading3>
          <ul>
            <li className="experience">
              <Title.Heading4>Web Developer and Visual Designer</Title.Heading4>
              Freelance
            </li>
            <li className="experience">
              <Title.Heading4>Lead UI Engineer</Title.Heading4>
              Joyjet Digital Space Agency
            </li>
          </ul>
        </div>
      </>
  },
  {
    id: 4,
    title: 'Amorésio de Souza',
    content:
    <>
      <Title.Heading2>Back-end Product Developer</Title.Heading2>
      <div className='member-avatar'>
        <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHEvTjMNVNe7g/profile-displayphoto-shrink_800_800/0/1623081943299?e=1639008000&v=beta&t=CWuRsGOlYzAqj86haqG-yRbe7C3BFVPpEF62S-Dblk8' className='avatar' alt='Amorésio de Souza' />
      </div>
      <div className='member-description'>
        <p>Computer Science Academic. Passionate about programming.</p>
        <Title.Heading3>Experience</Title.Heading3>
        <ul>
          <li className="experience">
            <Title.Heading4>Analista Programador</Title.Heading4>
            Grupo Cometa
          </li>
          <li className="experience">
            <Title.Heading4>Estagiário</Title.Heading4>
            Unemat Oficial - RISC Redes Inteligentes e Soluções Criativas
          </li>
        </ul>
      </div>
    </>
  },
  {
    id: 5,
    title: 'Pedro Azevedo',
    content:
    <>
      <Title.Heading2>Front-End Developer | JavaScript | React Native | React</Title.Heading2>
      <div className='member-avatar'>
        <img src='https://pbs.twimg.com/profile_images/1392878203606380545/ZYa3HMEt_400x400.jpg' className='avatar' alt="Pedro Azevedo" />
      </div>
      <div className='member-description'>
        <p>Always willing to learn new technologies to improve my knowledge skills.</p>
        <Title.Heading3>Experience</Title.Heading3>
        <ul>
          <li className="experience">
            <Title.Heading4>Mobile Developer | React-Native</Title.Heading4>
            Midway
          </li>
          <li className="experience">
            <Title.Heading4>JavaScript Developer | React | React-Native</Title.Heading4>
            Concrete Solutions
          </li>
        </ul>
      </div>
    </>
  },
  {
    id: 6,
    title: 'Eden Paulo Cruz',
    content:
    <>
      <Title.Heading2>Front-End Developer | JavaScript | React</Title.Heading2>
      <div className='member-avatar'>
        <img src='https://pbs.twimg.com/profile_images/1252312349882626048/ZU7vOk2W_400x400.jpg' className='avatar' alt="Eden Paulo Cruz" />
      </div>
      <div className='member-description'>
        <p>Eternal apprentice! Passionate about programming and always ready to help.</p>
        <Title.Heading3>Experience</Title.Heading3>
        <ul>
          <li className="experience">
            <Title.Heading4>Web Developer</Title.Heading4>
            Freelancer
          </li>
          <li className="experience">
            <Title.Heading4>IT Technician</Title.Heading4>
            Self Employee
          </li>
        </ul>
      </div>
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
        <Title.Heading1>App</Title.Heading1>
        <Menu />
        <ButtonSecondary>Say Hello</ButtonSecondary>
      </Header>
      <Content 
        title={title}
        content={content}
      />
      <Sidebar sidebarContent={members} handleClick={handleClick} />
      <Footer />
    </div>
  )
}

export default App