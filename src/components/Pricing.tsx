import { Box, Flex } from "@chakra-ui/react";

import React from "react";
import { Price } from "../types";
import { DEFAULT_CURRENCY, PricingInformationText } from "../constants";

const Pricing = ({ totalPrice, perPersonPrice }: Price) => {
  return (
    <div data-testid="pricing-information" className="pricing-information">
      <Flex
        pt={2}
        justify="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box className="PriceInformation" d="flex" mt="2" alignItems="center">
          <div>
            <Box
              as="span"
              textTransform="capitalize"
              color="gray.600"
              fontSize="xs"
            >
              {PricingInformationText.TOTAL_PRICE_FROM}
            </Box>
            <Box
              color="orange.500"
              fontSize="2xl"
              fontWeight="semibold"
              data-testid="total-price"
            >
              {DEFAULT_CURRENCY}
              {totalPrice}
            </Box>
            <Box
              as="span"
              textTransform="capitalize"
              color="gray.600"
              fontSize="xs"
            >
              ({PricingInformationText.PER_PERSON + " "}
              <Box as="span" fontWeight="semibold" color="black">
                {DEFAULT_CURRENCY}
                {perPersonPrice}
              </Box>
              )
            </Box>
          </div>
        </Box>
      </Flex>
    </div>
  );
};

export default Pricing;
