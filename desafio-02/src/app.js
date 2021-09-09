import { Header } from './header'
import { Content } from './content'
import { Sidebar } from './sidebar'
import { Footer } from './footer'

const team = [
  {
    id: 1,
    title: 'Fernando Daciuk',
    content: { 
      avatar: 'https://pbs.twimg.com/profile_images/1415288716415877121/zK7lC5Ns.jpg',
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
      avatar: 'https://pbs.twimg.com/profile_images/1432437836800794636/_TEdKmBy_400x400.jpg',
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
    content: {
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
    content: {
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