import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

const questions = [
  {
    question: 'Does Academy also offer subscriptions?',
    answer:
      'Yes. In addition to purchasing individual, marketplace courses, eligible learners can also enroll in our subscription offerings. ',
  },
  {
    question: 'Does Academy offer promotions on courses',
    answer:
      'Yes! We frequently run promotions that offer courses at great, low prices! If you want to be alerted of our promotions,',
  },
  {
    question: 'What do Academy courses include?',
    answer:
      'Each Udemy course is created, owned and managed by the instructor(s). The foundation of each Udemy course are its lectures, which can include videos, slides, and text. ',
  },
  {
    question: 'Does Academy also offer subscriptions?',
    answer:
      'Yes. In addition to purchasing individual, marketplace courses, eligible learners can also enroll in our subscription offerings. ',
  },
];
export default function FrequentlyAskedQuestion(props) {
  return (
    <Box width={['100%', '90%', '70%']} px={[0, 5]} py={5}>
      {questions.map((item, index) => {
        return (
          <Accordion bgColor='background.900' key={index} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  color='primary.900'
                  _expanded={{
                    bg: 'primary.900',
                    color: 'white',
                    fontWeight: 'semibold',
                  }}
                >
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    color='text.900'
                    fontWeight='semibold'
                    fontSize='lg'
                  >
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4} color='text.900'>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </Box>
  );
}
