import './App.css'
import Grade from './Grade.tsx'
import { Hora } from './Hora.tsx'
import Materia from './Materia.tsx'

function App() {

  return (
  <div>
    <Grade>
      <Materia disciplina="DCC013" nome="Estrutura de Dados" turma='A' dia='Segunda-feira' inicio={Hora(21)} fim={Hora(23)}></Materia>
      <Materia disciplina="DCC013" nome="Estrutura de Dados" turma='A' dia='Terca-feira' inicio={Hora(19)} fim={Hora(21)}></Materia>
      <Materia disciplina="DCC207" nome="Desenvolvimento Web Front-End" turma='A' dia='Segunda-feira' inicio={Hora(19)} fim={Hora(19)}></Materia>
      <Materia disciplina="DCC207" nome="Desenvolvimento Web Front-End" turma='A' dia='Quinta-feira' inicio={Hora(21)} fim={Hora(23)}></Materia>
    </Grade>
  </div> 
  )
}

export default App
