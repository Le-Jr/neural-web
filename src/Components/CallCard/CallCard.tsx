import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";

const CallCard = () => {
  return (
    <section className="container mx-auto px-4 max-w-2xl text-center mt-5 mb-10">
      <div className=" w-full bg-gray-500 rounded-md flex flex-col justify-center items-center p-3">
        <h3 className="text-white text-center max-w-80 font-bold mt-3 mb-2">
          Pronto para Multiplicar Suas Conversões?
        </h3>
        <p className="text-white font-semibold">
          Apenas 5 vagas esta semana - Reserve já a sua!
        </p>
        <Button className=" text-black mt-3 mb-5" variant={"secondary"}>
          {" "}
          <MessageCircleMore />
          <a href="https://wa.me/5521981265872?text=Ol%C3%A1!!%20Gostaria%20de%20saber%20mais%20sobre%20as%20landing%20pages!!">
            Quero minha landing agora
          </a>{" "}
        </Button>
        <p className  ="text-white text-sm  opacity-80 mb-3">
          ✅ Resposta em até 30 minutos • ✅ Sem compromisso • ✅ Orçamento
          gratuito
        </p>
      </div>
    </section>
  );
};

export default CallCard;
