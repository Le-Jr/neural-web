const CardsQuality = () => {
  return (
    <section className="container mx-auto px-4 max-w-2xl text-center mt-15">
      <h3 className="font-bold text-2xl">
        Baseado em Ciência + Casos de Sucesso
      </h3>
      <h5 className="text-md text-muted-foreground">
        Técnicas comprovadas que geraram milhões em vendas
      </h5>
      <div className="w-full rounded-md shadow-lg border-black flex flex-col items-center justify-center p-4 bg-zinc-600 text-white mt-3">
        {" "}
        <h5 className="font-semibold">🧠 Neuromarketing Aplicado</h5>
        <p>
          Baseado em 15+ estudos de comportamento do consumidor e gatilhos
          mentais de Robert Cialdini
        </p>
      </div>
      <div className="w-full rounded-md shadow-lg border-black flex flex-col items-center justify-center p-4 bg-zinc-600 text-white mt-3">
        {" "}
        <h5 className="font-semibold">📈 Conversão comprovada</h5>
        <p>
          Mesmas técnicas usadas por páginas que faturam R$ 100k+/mês no mercado
          de infoprodutos
        </p>
      </div>
      <div className="w-full rounded-md shadow-lg border-black flex flex-col items-center justify-center p-4 bg-zinc-600 text-white mt-3">
        {" "}
        <h5 className="font-semibold">🤖 IA Otimizada</h5>
        <p>
          Copy gerada e testada por IA avançada(ChatGPT 4o, Claude sonnet 4, Perplexity AI, etc...), garantindo máxima performance
          de conversão
        </p>
      </div>
    </section>
  );
};

export default CardsQuality;
