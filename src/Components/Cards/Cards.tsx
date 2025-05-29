import {Check} from "lucide-react"
const Cards = () =>{
    return(
        <section className="container mx-auto px-4 max-w-2xl text-center mt-15 flex justify-between">
      <div className="w-50 rounded-md shadow-lg border-black flex items-center justify-center ">
        {" "}
        <Check />
        <p>copy neurovendedora</p>
      </div>
      <div className="w-50 h-15 rounded-md shadow-lg border-black flex p-2 items-center justify-center ">
        {" "}
        <Check />
        <p>Design Limpo</p>
      </div>
      <div className="w-50 rounded-md shadow-lg border-black flex p-2 items-center justify-cent">
        {" "}
        <Check />
        <p>Entrega em até 24h</p>
      </div>
    </section>
    )
}

export default Cards