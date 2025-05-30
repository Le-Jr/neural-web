import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Examples = () => {
  const cards = [
    {
      id: 1,
      title: "Página de Vendas",
      img: "mercurio.png",
      link: "https://mercuriochat.com.br",
    },
    {
      id: 2,
      title: "Página para nutricionistas",
      img: "image.png",
      link: "https://nutricionist-navy.vercel.app/",
    },
    {
      id: 3,
      title: "Página para finanças",
      img: "finance.png",
      link: "https://finance-lp.vercel.app/",
    },
    {
      id: 4,
      title: "Página para Marketing Digital",
      img: "marketing.png",
      link: "https://digitalprolp.netlify.app/",
    },
  ];

  return (
    <section className="container mx-auto px-4 max-w-2xl text-center mt-15 flex justify-between flex-col items-center">
      <h3 className="font-bold text-2xl">Exemplos do que você vai receber</h3>
      <h5 className="text-muted-foreground text-md">
        Páginas profissionais para diferentes objetivos
      </h5>
      <Carousel
        className="mt-3 w-9/12 max-w-xs"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {cards.map((item) => (
            <CarouselItem key={item.id}>
              <div className="p-2">
                <Card className="shadow-2xs shadow-emerald-950">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                    <a href={item.link}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-50 h-50 object-cover rounded-lg"
                      />
                    </a>
                    <p>{item.title}</p>
                    <Button variant={"default"}>
                      {" "}
                      <a href={item.link} target="_blank">
                        Clique para ver a página
                      </a>{" "}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Examples;
