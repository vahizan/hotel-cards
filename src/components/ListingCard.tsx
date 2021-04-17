import { Box, Image, Button, Divider, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import React from "react";
import { Listing } from "../types";
import Pricing from "./Pricing";
import UserRatingInfo from "./UserRatingInfo";
import PriceInclusionInfo from "./PriceInclusionInfo";
import { VIEW_MORE } from "../constants";

const ListingCard = ({
  imageUrl = "",
  title,
  location,
  starRating,
  userRating,
  totalPrice,
  totalReviews,
  perPersonPrice,
  priceIncludes,
}: Listing) => {
  return (
    <div className="listing-card">
      <Box
        shrink="2"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={imageUrl} alt={title} />
        <Box p={3}>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h2"
            lineHeight="tight"
            isTruncated
            data-testid="title"
          >
            {title}
          </Box>
          {starRating &&
            starRating > 0 &&
            Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  data-testid="star-icon"
                  key={i}
                  color={i < starRating ? "yellow.500" : "gray.300"}
                />
              ))}
          {location && (
            <Box data-testid="location" d="flex" alignItems="baseline">
              <Box
                color="gray.500"
                pt={2}
                pb={2}
                letterSpacing="wide"
                fontSize="xs"
                textTransform="capitalize"
              >
                {location}
              </Box>
            </Box>
          )}

          {userRating && userRating > 0 && (
            <UserRatingInfo
              totalReviews={totalReviews}
              userRating={userRating}
            />
          )}
          <Divider pt="2" pb="3" orientation="horizontal" />

          {priceIncludes && (
            <PriceInclusionInfo priceIncludes={priceIncludes} />
          )}
        </Box>
        <Flex
          bgColor="gray.50"
          w="inherit"
          p={2}
          justify="space-between"
          alignItems="center"
          borderTop="1px"
          borderTopStyle="dashed"
          borderRadius={3}
          borderColor="gray.300"
        >
          <Pricing perPersonPrice={perPersonPrice} totalPrice={totalPrice} />
          <Button
            data-testid="view-more-button"
            color="white"
            bgColor="orange.500"
          >
            {VIEW_MORE}
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default ListingCard;
