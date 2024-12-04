import './App.css'
import Materia from './Materia.tsx'

function App() {

  return <div>
    <Materia disciplina="DCC207" nome="Desenvolvimento Web Front-End" turma='A' dia='segunda-feira' inicio={new Date()} fim={new Date()}></Materia>
  </div> 

}

export default App
