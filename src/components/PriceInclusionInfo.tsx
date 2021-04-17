import { Box } from "@chakra-ui/react";

import React from "react";
import { PriceInclusionDetails } from "../types";

const PriceInclusionInfo = ({ priceIncludes }: PriceInclusionDetails) => {
  return (
    <div data-testid="price-inclusion-info" className="price-inclusion-info">
      {priceIncludes &&
        priceIncludes.map((detail, i) => (
          <Box
            key={`${detail}-${i}`}
            pt={2}
            d="flex"
            mt="1"
            fontSize="0.9em"
            alignItems="center"
          >
            {detail}
          </Box>
        ))}
    </div>
  );
};

export default PriceInclusionInfo;
