import { Header } from './header'
import { Content } from './content'
import { Sidebar } from './sidebar'
import { Footer } from './footer'

const team = [
  {
    id: 1,
    title: 'Fernando Daciuk',
    content: { 
      role: 'Tech Lead | Software Developer',
      description: 'Teacher and web developer, focused on JavaScript, both on client and server (with Node.js).',
      experience: [
        {
          role: 'Founder & Teacher',
          company: 'queroser.ninja'
        },
        {
          role: 'Founder & CTO',
          company: 'Lukin Co.'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Diego Moretti',
    content: { 
      role: 'Developer Relations',
      description: 'Tech, Web & Community specialist.',
      experience: [
        {
          role: 'Co-Creator & Member',
          company: 'Front-End Brasil'
        },
        {
          role: 'Founder & Organizer',
          company: 'Front in Floripa'
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Adeonir Kohl',
    content: { 
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
  }
]

function App () {
  return (
    <div className='app'>
      <Header />
      <Content />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App