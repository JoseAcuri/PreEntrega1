import './App.css'
import { TwitterFollowCard } from '../src/TwitterFollowCard'

const users = [
  {
    userName: 'Martinpdisalvo',
    name: 'Coscu',
    isFollowing: true
  },
  {
    userName: 'samyriveratv',
    name: 'rivers',
    isFollowing: false
  },
  {
    userName: 'IbaiLlanos',
    name: 'Ibai',
    isFollowing: true
  },
  {
    userName: 'p_stary',
    name: 'Patrick Stary',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}