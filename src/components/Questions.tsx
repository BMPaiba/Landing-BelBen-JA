import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { questions } from "@/data";
  
  export default function FrecuentlyQuestions() {
    return (
      <Accordion type="single" collapsible className="w-full">
        {questions.map((question, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{question.title}</AccordionTrigger>
            <AccordionContent>{question.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  