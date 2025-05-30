import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto px-4 max-w-2xl text-center mt-5  flex flex-col items-center">
      <img src="neural.svg" alt="" className="w-45 h-45 mb-5 " />
      <Alert className="w-70 bg-amber-500 text-white mb-3 shadow-amber-700">
        {/* <Terminal className="h-4 w-4" /> */}
        <AlertTitle>🔥 Apenas cinco vagas essa semana!!!</AlertTitle>
      
      </Alert>

      <h1 className="text-4xl font-bold text-center">
        Landing Page profissional, Pronta em 24h - Otimizada por IA para vender
        por Você
      </h1>
      <p className="text-lg text-muted-foreground text-center mt-3">
        Copy neurocientífica + Design que hipnotiza + IA que otimiza = Suas vendas multiplicadas.
        <strong>Ideal para lançamentos, ebooks, cursos e infoprodutos.</strong>
      </p>

      <p className="text-lg font-bold text-center mt-3">A partir de R$ 297,00</p>

      <Button className="cursor-pointer shadow-sm mt-5 ">
        {" "}
        
        <a href="https://wa.me/5521981265872?text=Ol%C3%A1!!%20Gostaria%20de%20saber%20mais%20sobre%20as%20landing%20pages!!">
          {" "}
          🚀
          Quero minha landing em 24h  
        </a>
      </Button>
    </header>
  );
};

export default Header;
