import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";

const CallCard = () => {
  return (
    <section className="container mx-auto px-4 max-w-2xl text-center mt-10">
      <div className=" w-full bg-gray-500 rounded-md flex flex-col justify-center items-center">
        <p className="text-white text-center max-w-70 font-bold mt-3">Me chama agora no WhatsApp e receba sua landing page amanhã! </p>
        <Button className=" text-black mt-3 mb-5" variant={"secondary"}>
          {" "}
          <MessageCircleMore />
          <a href="https://wa.me/5521992109778?text=Ol%C3%A1!!%20Gostaria%20de%20saber%20mais%20sobre%20as%20landing%20pages!!">
            Quero minha landing agora
          </a>{" "}
        </Button>
      </div>
    </section>
  );
};

export default CallCard;
