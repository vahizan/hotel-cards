import { Box, Image, Flex } from "@chakra-ui/react";

import React from "react";
import { UserRating } from "../types";
import smileyFace from "../assets/smiley_face.png";

const outOfTen = (value: number) => value / 10;
const UserRatingInfo = ({ userRating = 0, totalReviews = 0 }: UserRating) => {
  return (
    <Box data-testid="user-rating-info" className="user-rating-info">
      <Flex flexDirection="row" alignItems="center" justify="flex-start">
        <Box
          as="div"
          pr={4}
          pl={4}
          pt={1}
          pb={1}
          mr="2"
          color="white"
          backgroundColor="blue.400"
          fontWeight="bold"
          fontSize="l"
        >
          {outOfTen(userRating)}
        </Box>
        <Image src={smileyFace} alt="smiley face emoji" w="30px" h="30px" />
        <Box
          as="div"
          textTransform="capitalize"
          ml="2"
          color="blue.400"
          fontSize="sm"
        >
          (based on {totalReviews} reviews)
        </Box>
      </Flex>
    </Box>
  );
};

export default UserRatingInfo;
