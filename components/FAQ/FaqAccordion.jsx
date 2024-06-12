"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { faqData } from "@/utils/data";
import { FaPlus } from "react-icons/fa";

export default function FaqAccordion() {
  const dataLength = faqData.length
  return (
    <Box>
      <Accordion allowToggle gap="4" display="flex" flexDirection="column">
        {faqData.map((data, index) => {
          return (
            <div key={index}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h5>
                      <AccordionButton
                        paddingX="0"
                        gap="1rem"
                        padding="10px"
                        className="rounded-t-lg"
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
                        <Box as="span" flex="1" textAlign="left" fontWeight="600" textColor="#303135" className="text-base md:text-lg">
                          {data.question}
                        </Box>
                      </AccordionButton>
                    </h5>
                    <AccordionPanel className="p-4 lg:pl-[56px]">
                      {data.answer}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              { index < dataLength - 1 && (
                <div style={{borderTop: "1px solid #d8dce8"}}></div>
              )}
            </div>
          );
        })}
      </Accordion>
    </Box>
  );
}
