import { Button } from "@/components/ui/button";

const Packages = () => {
  return (
    <section className="container mx-auto px-4 max-w-2xl text-center mt-15">
      <h3 className="font-bold text-2xl">Escolha seu pacote</h3>
      <h5 className="text-md text-muted-foreground">
        Soluções para cada necessidade{" "}
      </h5>

      <div className="Plans flex justify-center gap-8 mt-5">
          <div className="Basic w-2xs rounded-2xl bg-gray-500 shadow-2xl text-white">
              <h6 className="text-md font-semibold mt-5 ">Landing básica</h6>
              <p className="font-bold">R$ 297,00</p>
              <ul className="mt-3">
                <li> ✅ - 1 página profissional</li>
                <li> ✅ - Copy otimizada por IA</li>
                <li> ✅ - Design Responsivo</li>
                <li> ✅ - Entrega em 24h</li>
                <li> ✅ - 1 revisão incluída</li>
              </ul>
              <Button variant={"outline"} className="mt-3 mb-3 text-black">
                {" "}
                <a href="https://wa.me/5521981265872?text=Ol%C3%A1!!%20Gostaria%20de%20saber%20mais%20sobre%o%20plano%20básico!!">Escolher básica</a>{" "}
              </Button>
          </div>
          <div className="Full w-2xs rounded-2xl bg-gray-500 shadow-2xl text-white">
              <h6 className="text-md font-semibold mt-5 ">Pacote Completo</h6>
              <p className="font-bold">R$ 497,00</p>
              <ul className="mt-3">
                <li> ✅ - Página de vendas + captura</li>
                <li> ✅ - Copy neurovendedora</li>
                <li> ✅ - Design premium</li>
                <li> ✅ - Entrega em 48h</li>
                <li> ✅ - 2 revisões incluídas</li>
              </ul>
              <Button variant={"outline"} className="mt-3 mb-3 text-black">
                {" "}
                <a href="https://wa.me/5521981265872?text=Ol%C3%A1!!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20completo!!">Escolher Completo</a>{" "}
              </Button>
          </div>
      </div>
    </section>
  );
};

export default Packages;
