import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto px-4 max-w-2xl text-center mt-10">
      <h1 className="text-4xl font-bold text-center">
        Landing Page profissional, Pronta em 24h - Otimizada por IA para vender
        por Você
      </h1>
      <p className="text-lg text-muted-foreground text-center mt-3">
        Copy escrita com Inteligência Artificial, design testado pra conversão e
        entrega expressa, Ideal pra lançamentos, eBooks, mentorias ou produtos
        digitais.
      </p>

      <Button className="cursor-pointer shadow-sm mt-5 ">Quero minha landing agora</Button>
    </header>
  );
};

export default Header;
