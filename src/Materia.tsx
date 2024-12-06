import "./Materia.css";

interface MateriaProps {
    disciplina:string;
    nome: string;
    turma: string;
    dia?: string;
    inicio?: string;
    fim?: string;
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
                    <td className="inicio">{inicio}</td>
                    <td className="fim">{fim}</td>
                </>)
                :
                <div></div>
            }
            </tr>
    )
}