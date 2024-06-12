"use client";

import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";

import { faqPaymentData } from "@/utils/data";

function FAQPayment() {
  return (
    <Box>
      <Accordion allowToggle gap="4" display="flex" flexDirection="column">
        {faqPaymentData.map((data, index) => {
          return (
            <AccordionItem
              key={index}
              border="1px solid #B5B5C3"
              borderTopRadius="0.5rem"
            >
              {({ isExpanded }) => (
                <>
                  <h5>
                    <AccordionButton
                      paddingX="0"
                      gap="1rem"
                      padding="10px"
                      className="rounded-t-lg"
                      borderBottom="1px solid #B5B5C3"
                    >
                      <Box
                        textColor="#B5B5C3"
                        bgColor={"rgba(181, 181, 195, 0.25)"}
                        className="rounded-md p-2"
                      >
                        <FaPlus
                          style={{
                            rotate: isExpanded ? "45deg" : "0deg",
                            transition: "rotate 300ms ease-out",
                          }}
                        />
                      </Box>
                      <Box as="span" flex="1" textAlign="left" fontWeight="600">
                        {data.question}
                      </Box>
                    </AccordionButton>
                  </h5>
                  <AccordionPanel pb={4} fontSize="0.75rem">
                    {data.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
}

export default FAQPayment;
