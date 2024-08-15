import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { questions } from "@/data";
  
  export default function FrecuentlyQuestions() {
    return (
      <Accordion type="single" collapsible className="w-full max-w-[90%] mx-auto">
        {questions.map((question, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger><p className=" text-start text-green-700 text-lg">{question.title} </p></AccordionTrigger>
            <AccordionContent><p className=" text-start text-base">{question.description} </p></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  