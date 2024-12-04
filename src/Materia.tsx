import "./css/Materia.css";

interface MateriaProps {
    disciplina:string;
    nome: string;
    turma: string;
    dia?: string;
    inicio?: Date;
    fim?: Date;
}

export default function Materia({
    disciplina,
    nome,
    turma,
    dia,
    inicio,
    fim
}: MateriaProps) {
    return (
        <tr>
            <td className="disciplina">{disciplina.toUpperCase()}</td>
            <td className="nome">{nome}</td>
            <td className="turma">{turma.toUpperCase()}</td>
            {dia != "0" ?
                (<>
                    <td className="dia">{dia}</td>
                    <td className="inicio">{inicio?.toLocaleString()}</td>
                    <td className="fim">{fim?.toLocaleString()}</td>
                </>)
                :
                <div></div>
            }
            </tr>
    )
}