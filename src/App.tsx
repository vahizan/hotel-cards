import React from "react";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import DefaultLayout from "./components/layouts/Default";

import { useListings } from "./hooks/useListings";
import ListingCard from "./components/ListingCard";
import { Listing } from "./types";

const toListingElements = (listings: Array<Listing>) => {
  return listings.map((listing) => {
    const {
      title,
      totalPrice,
      perPersonPrice,
      imageUrl = "",
      location = "",
      starRating = -1,
      userRating = -1,
      totalReviews = -1,
      priceIncludes = [],
    } = listing;
    return (
      <ListingCard
        imageUrl={imageUrl}
        title={title}
        totalPrice={totalPrice}
        perPersonPrice={perPersonPrice}
        starRating={starRating}
        userRating={userRating}
        location={location}
        totalReviews={totalReviews}
        priceIncludes={priceIncludes}
      />
    );
  });
};
const App = () => {
  const { listings } = useListings();
  return (
    <DefaultLayout>
      <Flex
        mt={10}
        mb={10}
        justify="center"
        alignItems="center"
        flexDirection="row"
        wrap="wrap"
      >
        {toListingElements(listings)}
      </Flex>
    </DefaultLayout>
  );
};

export default App;
