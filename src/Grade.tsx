import { ReactNode } from 'react'
import './css/Grade.css'

interface GradeProps {
    children?: ReactNode
}

export default function Grade({children}:GradeProps){
    return <div className='grade'>
        <table>
            <thead>
                <tr>
                    <th>Disciplina</th>
                    <th>Nome</th>
                    <th>Turma</th>
                    <th>Dia</th>
                    <th>Inicio</th>
                    <th>Fim</th>
                </tr>
            </thead>
            <tbody className='materias'>
                {children}
            </tbody>
        </table>
    </div>
}