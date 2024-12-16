'use client';

import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FrequentQuestions = () => (
  <div className="p-4 space-y-2 max-w-xl mx-auto mb-10">
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Crypto?</AccordionTrigger>
        <AccordionContent>
          I dont know what is crypto but its priced has been increasing day by day.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="">
        <AccordionTrigger>is it legal?</AccordionTrigger>
        <AccordionContent>
          Yes. its legal as there has been no statement till date.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export default FrequentQuestions;
