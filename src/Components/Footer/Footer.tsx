const Footer = () =>{
    return(
        <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
            <div className="neural-icon mx-auto mb-4 opacity-80 w-40 h-40 bg-white rounded-4xl flex justify-center items-center p-5">
                <img src="neural.svg" alt="" />
            </div>
            <h5 className="text-xl font-bold mb-2">NeuralWeb</h5>
            <p className="text-gray-400 mb-4">Landing pages que convertem, criadas com inteligência artificial</p>
            <p className="text-sm text-gray-500">© 2024 NeuralWeb. Todos os direitos reservados.</p>
        </div>
    </footer>
    )
}

export default Footer