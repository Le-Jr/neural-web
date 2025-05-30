import {Check} from "lucide-react"

const Cards = () => {
    return(
        <section className="container mx-auto px-4 max-w-4xl mt-5">
            {/* Grid responsivo: 1 coluna no mobile, 2 colunas no tablet, 3 colunas no desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-xl transition-shadow duration-300">
                    <Check className="text-green-500 mb-2" size={24} />
                    <p className="text-gray-700 font-medium">Copy neurovendedora</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-xl transition-shadow duration-300">
                    <Check className="text-green-500 mb-2" size={24} />
                    <p className="text-gray-700 font-medium">Design Limpo</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                    <Check className="text-green-500 mb-2" size={24} />
                    <p className="text-gray-700 font-medium">Entrega em até 24h</p>
                </div>
                
            </div>
        </section>
    )
}

export default Cards