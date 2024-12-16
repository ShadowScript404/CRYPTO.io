'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import styled from 'styled-components';

// Styled components for Accordion
const StyledAccordion = styled(AccordionPrimitive.Root)`
  border: 1px solid white; /* White border */
  border-radius: 8px;
  background-color: black; /* Black background */
`;

const StyledItem = styled(AccordionPrimitive.Item)`
  border-bottom: 1px solid white;

  &:last-of-type {
    border-bottom: none;
  }
`;

const StyledTrigger = styled(AccordionPrimitive.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: black;
  border: none;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: white; /* White text */
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom:10em

  &:hover {
    background: #333333;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &[data-state='open'] svg {
    transform: rotate(180deg); /* Rotate chevron when open */
  }
`;

const StyledContent = styled(AccordionPrimitive.Content)`
  padding: 1rem;
  background: black;
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const Accordion = StyledAccordion;
const AccordionItem = StyledItem;

const AccordionTrigger = React.forwardRef(
  (
    { children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <StyledTrigger ref={ref} {...props}>
      {children}
      {/* Single Chevron Icon */}
      <ChevronDown />
    </StyledTrigger>
  )
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef(
  (
    { children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
    ref: React.Ref<HTMLDivElement>
  ) => <StyledContent ref={ref} {...props}>{children}</StyledContent>
);
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
