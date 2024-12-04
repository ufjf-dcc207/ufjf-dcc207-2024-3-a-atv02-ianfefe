import "./Materia.css";

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
    return <div className="materia">
        <div className="disciplina">{disciplina.toUpperCase()}</div>
        <div className="nome">{nome}</div>
        <div className="turma">{turma.toUpperCase()}</div>
        {dia != "0" ?
            (<>
                <div className="dia">{dia}</div>
                <div className="inicio">{inicio?.toLocaleString()}</div>
                <div className="fim">{fim?.toLocaleString()}</div>
            </>)
            :
            <div></div>
        }
        
    </div>
}