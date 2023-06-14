import './BtnStart.css'
import { useNavigate } from 'react-router-dom'

const BtnStart = () => {
  const navegar = useNavigate()
  const NavegarNextPag = () => {
    navegar('/inicio')
  }
  return (
    <h1 className='btnStart' ><a href="#" onClick={NavegarNextPag}>
      <span> Iniciar </span></a></h1>

  )
}

export default BtnStart