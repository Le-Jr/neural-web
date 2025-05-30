import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="container mx-auto px-4 max-w-2xl text-center mt-15">
      <h3 className="font-bold text-2xl">Perguntas Frequentes</h3>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Realmente entregam em 24h?</AccordionTrigger>
          <AccordionContent className="text-left">
            Sim! Nosso processo otimizado com IA permite entregas rápidas sem
            perder qualidade. Se não cumprir o prazo, você ganha desconto de
            50%.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>E se eu não gostar do resultado?</AccordionTrigger>
          <AccordionContent className="text-left">
            Oferecemos revisões incluídas em todos os pacotes. Se ainda assim
            não ficar satisfeito, devolvemos 100% do valor.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Funciona para qualquer nicho?</AccordionTrigger>
          <AccordionContent className="text-left">
            Especializamos em infoprodutos, cursos online, ebooks e lançamentos
            digitais. São os nichos que mais dominamos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Como é feito o pagamento?</AccordionTrigger>
          <AccordionContent className="text-left">
            Aceitamos PIX (desconto de 5%), cartão de crédito e transferência.
            Pagamento 50% no início, 50% na entrega.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
