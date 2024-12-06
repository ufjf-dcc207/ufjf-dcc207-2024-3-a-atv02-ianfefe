export function Hora(hora:number){

    let newHora = hora.toString()

    if(hora >= 0 && hora <= 23){
        return (newHora + ":00")
    }else {
        return ("hora inválida")
    }
}