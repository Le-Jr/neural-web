import { Button } from "@/components/ui/button";

const Packages = () => {
  const plans = [
    {
      id: 1,
      title: "Landing básica",
      price: "R$ 297,00",
      button: "Escolher básica",
      link: "https://wa.me/5521981265872?text=Ol%C3%A1!!%20Gostaria%20de%20saber%20mais%20sobre%o%20plano%20básico!!",
      advantages: [
        "1 página profissional",
        "Copy otimizada por IA",
        "Design Responsivo",
        "Entrega em 24h",
        "1 revisão incluída",
      ],
    },
    {
      id: 1,
      title: "Pacote Completo",
      price: "R$ 497,00",
      button: "Escolher completo",
      link: "https://wa.me/5521981265872?text=Ol%C3%A1!!%20Gostaria%20de%20saber%20mais%20sobre%o%20plano%completo!!",
      advantages: [
        "Página de vendas + captura",
        "Copy neurovendedora",
        "Design premium",
        "Entrega em 48h",
        "2 revisões incluídas",
      ],
    },
  ];
  return (
    <section className="container mx-auto px-4 max-w-2xl text-center mt-15">
      <h3 className="font-bold text-2xl">Escolha seu pacote</h3>
      <h5 className="text-md text-muted-foreground">
        Soluções para cada necessidade{" "}
      </h5>

      <div className="Plans flex justify-center gap-8 mt-5">
        {plans.map((items) => (
          <div className="Basic w-2xs rounded-2xl bg-gray-500 shadow-2xl text-white">
            <h6 className="text-md font-semibold mt-5">{items.title}</h6>
            <p className="font-bold">{items.price}</p>
            {items.advantages.map((adv) => (
              <ul className="mt-3">
                <li>✅{adv}</li>
              </ul>
            ))}
            <Button variant={"outline"} className="mt-3 mb-3 text-black">
              {" "}
              <a href={items.link}>{items.button}</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
