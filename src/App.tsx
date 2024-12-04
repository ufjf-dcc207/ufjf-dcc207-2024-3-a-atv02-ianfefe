import './css/App.css'
import Grade from './Grade.tsx'
import Materia from './Materia.tsx'

function App() {

  return (
  <div>
    <Grade>
      <Materia disciplina="DCC013" nome="Estrutura de Dados" turma='A' dia='Segunda-feira' inicio={new Date()} fim={new Date()}></Materia>
      <Materia disciplina="DCC013" nome="Estrutura de Dados" turma='A' dia='Terca-feira' inicio={new Date()} fim={new Date()}></Materia>
      <Materia disciplina="DCC207" nome="Desenvolvimento Web Front-End" turma='A' dia='Segunda-feira' inicio={new Date()} fim={new Date()}></Materia>
      <Materia disciplina="DCC207" nome="Desenvolvimento Web Front-End" turma='A' dia='Quinta-feira' inicio={new Date()} fim={new Date()}></Materia>
    </Grade>
  </div> 
  )
}

export default App
