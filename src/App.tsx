import './App.css'
import Grade from './Grade.tsx'
import Materia from './Materia.tsx'

function App() {

  return (
  <div>
    <Grade>
      <Materia disciplina="DCC207" nome="Desenvolvimento Web Front-End" turma='A' dia='segunda-feira' inicio={new Date()} fim={new Date()}></Materia>
    </Grade>
  </div> 
  )
}

export default App
