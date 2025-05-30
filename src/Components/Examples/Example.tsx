
const Examples = () => {
  return (
    <section className="container mx-auto px-4 max-w-2xl text-center mt-15 flex justify-between flex-col items-center">
      <h3 className="font-bold text-2xl">Exemplos do que você vai receber</h3>
      <h5 className="text-muted-foreground text-md">Páginas profissionais para diferentes objetivos</h5>
      <section className="flex gap-5">
        <div className="w-75 shadow-lg bg-white flex flex-col items-center rounded-md p-4 gap-3 mt-6">
          <a href="https://mercuriochat.com.br" target="_blank" className="block">
            <img
              src="example.png"
              alt="Mercúrio Chat"
              className="w-full h-32 object-cover rounded-md"
            />
          </a>
          <p className="font-bold text-xl">página de captura</p>
        </div>
        <div className="w-75 shadow-lg bg-white flex flex-col items-center rounded-md p-4 gap-3 mt-4">
          <a href="https://mercuriochat.com.br" target="_blank" className="block">
            <img
              src="mercurio.png"
              alt="Mercúrio Chat"
              className="w-full h-32 object-cover rounded-md"
            />
          </a>
          <p className="font-bold text-xl">página de venda</p>
        </div>
      </section>
    </section>
  );
};

export default Examples;
