import { useState } from 'react'
import { Header } from './header'
import { Content } from './content'
import { Sidebar } from './sidebar'
import { Footer } from './footer'
import * as Title from './title'

const members = [
  {
    id: 1,
    title: 'Fernando Daciuk',
    content:
      <>
        <Title.Heading2>Tech Lead | Software Developer</Title.Heading2>
        <img src='https://pbs.twimg.com/profile_images/1415288716415877121/zK7lC5Ns.jpg' alt='Ferando Daciuk' />
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
      </>,
  },
  {
    id: 2,
    title: 'Diego Moretti',
    content:
      <>
        <Title.Heading3>Developer Relations</Title.Heading3>
        <img src='https://pbs.twimg.com/profile_images/1432437836800794636/_TEdKmBy_400x400.jpg' alt='Diego Moretti'/>
        <p>Tech, Web &amp; Community specialist.</p>
        <Title.Heading4>Experience</Title.Heading4>
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
      </>
  },
  /*{
    id: 3,
    title: 'Adeonir Kohl',
    content:
    <>
      <Title.Heading3></Title.Heading3>
      <p></p>
      <Title.Heading4>Experience</Title.Heading4>
      <ul>
        <li className="experience"><span></span></li>
        <li className="experience"><span></span></li>
      </ul>
    </> {
      avatar: 'https://pbs.twimg.com/profile_images/1369253967939657729/q6bEIJ7A_400x400.jpg',
      role: 'Frontend Developer',
      description: 'Web developer with background in Graphic Design and Photography.',
      experience: [
        {
          role: 'Web Developer and Visual Designer',
          company: 'Freelance'
        },
        {
          role: 'Lead UI Engineer',
          company: 'Joyjet Digital Space Agency'
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Amorésio de Souza',
    content:
    <>
      <Title.Heading3></Title.Heading3>
      <p></p>
      <Title.Heading4>Experience</Title.Heading4>
      <ul>
        <li className="experience"><span></span></li>
        <li className="experience"><span></span></li>
      </ul>
    </> {
      avatar: 'https://pbs.twimg.com/profile_images/1419345932177510403/NQEr_zI6_400x400.jpg',
      role: 'Backend Product Developer',
      description: 'Computer Science Academic. Passionate about programming.',
      experience: [
        {
          role: 'Analista Programador',
          company: 'Grupo Cometa'
        },
        {
          role: 'Estagiário',
          company: 'Unemat Oficial - RISC Redes Inteligentes e Soluções Criativas'
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Pedro Azevedo',
    content:
    <>
      <Title.Heading3></Title.Heading3>
      <p></p>
      <Title.Heading4>Experience</Title.Heading4>
      <ul>
        <li className="experience"><span></span></li>
        <li className="experience"><span></span></li>
      </ul>
    </> {
      avatar: 'https://pbs.twimg.com/profile_images/1392878203606380545/ZYa3HMEt_400x400.jpg',
      role: 'Front-End Developer | JavaScript | React Native | React',
      description: 'Always willing to learn new technologies to improve my knowledge skills.',
      experience: [
        {
          role: 'Mobile Developer | React-Native',
          company: 'Midway'
        },
        {
          role: 'JavaScript Developer | React | React-Native',
          company: 'Concrete Solutions'
        }
      ]
    }
  }*/
]

function App () {
  const [title, setTitle] = useState(members[0].title)
  const [content, setText] = useState(members[0].content)

  return (
    <div className='app'>
      <Header />
      <Content 
        title={title}
        content={content}
      />
      <Sidebar sidebarContent={members} />
      <Footer />
    </div>
  )
}

export default App