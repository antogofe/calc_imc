interface TabelaimcProps{
    imc:number
}

export default function Tabelaimc(props:TabelaimcProps){
    return(
        <div className="mx-2 mb-2">
            <div className="flex">
                <div className="w-1/2 border text-center font-bold">Classificação</div>
                <div className="w-1/2 border text-center font-bold">IMC</div>
            </div>
            <div className={"flex " + (props.imc < 18.5?"destaque":"")}>
                <div className="w-1/2 border">Abaixo do Peso</div>
                <div className="w-1/2 border">Abaixo de 18,5</div>
            </div> 
            <div className={"flex " + (props.imc >= 18.5 && props.imc <= 24.9?"destaque":"")}>
                <div className="w-1/2 border">Peso Normal</div>
                <div className="w-1/2 border">Entre 18,5 e 24,9</div>
            </div>
            <div className={"flex " + (props.imc >= 25 && props.imc <= 29.9?"destaque":"")}>
                <div className="w-1/2 border">Sobrepeso</div>
                <div className="w-1/2 border">Entre 25 e 29,9</div>
            </div>
            <div className={"flex " + (props.imc >= 30 && props.imc <= 34.9?"destaque":"")}>
                <div className="w-1/2 border">Obesidade Grau I</div>
                <div className="w-1/2 border">Entre 30 e 34,9</div>
            </div>
            <div className={"flex " + (props.imc >= 35 && props.imc <= 39.9?"destaque":"")}>
                <div className="w-1/2 border">Obesidade Grau II</div>
                <div className="w-1/2 border">Entre 35 e 39,9</div>
            </div>
            <div className={"flex " + (props.imc > 40?"destaque":"")}>
                <div className="w-1/2 border">Obesidade Grau III</div>
                <div className="w-1/2 border">Maior que 40</div>
            </div>
        </div>
    )
}