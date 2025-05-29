import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto px-4 max-w-2xl text-center mt-5  flex flex-col items-center">
      <img src="neural.svg" alt="" className="w-45 h-45 mb-5 "/>
      <h1 className="text-4xl font-bold text-center">
        Landing Page profissional, Pronta em 24h - Otimizada por IA para vender
        por Você
      </h1>
      <p className="text-lg text-muted-foreground text-center mt-3">
        Copy escrita com Inteligência Artificial, design testado pra conversão e
        entrega expressa, Ideal pra lançamentos, eBooks, mentorias ou produtos
        digitais.
      </p>

      <Button  className="cursor-pointer shadow-sm mt-5 "> <a href="https://wa.me/5521992109778?text=Ol%C3%A1!!%20Gostaria%20de%20saber%20mais%20sobre%20as%20landing%20pages!!"> Quero minha landing agora</a></Button>
    </header>
  );
};

export default Header;
