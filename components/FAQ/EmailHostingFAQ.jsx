"use client";

import { emailHostingFAQData } from "@/utils/data";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

function EmailHostingFAQ() {
  const dataLength = emailHostingFAQData.length

  return (
    <Box>
      <Accordion allowToggle gap="4" display="flex" flexDirection="column">
        {emailHostingFAQData.map((data, index) => {
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

export default EmailHostingFAQ;
