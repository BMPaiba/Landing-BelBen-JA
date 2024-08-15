import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  import { topics } from "@/data";
  
  const Topics = () => {
    return (
      <Accordion type="single" collapsible className="w-full max-w-[90%] mx-auto">
        {topics.map((topic, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger> <p className=" text-xl"><span className="font-semibold text-lg">{topic.title[0].title}:</span> {topic.title[0].description}</p></AccordionTrigger>
            <AccordionContent>
              <ul>
                {topic.description.map((lesson, contentIndex) => (
                  <li key={contentIndex} className="py-1  text-lg">
                    <strong>{lesson.title}:</strong> {lesson.description}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };
  
  export default Topics;
  