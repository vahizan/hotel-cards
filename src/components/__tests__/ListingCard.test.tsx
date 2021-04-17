import React from "react";
import { render } from "@testing-library/react";
import ListingCard from "../ListingCard";

describe("ListingCard", () => {
  let props = {
    title: "Title",
    totalPrice: 12,
    perPersonPrice: 6,
  };

  let propsWithOptional = {
    ...props,
    title: "title",
    location: "location",
    starRating: 4,
    userRating: 12,
    totalReviews: 50,
    priceIncludes: ["price", "include"],
  };

  describe("render", () => {
    test("renders component", () => {
      const { container } = render(<ListingCard {...props} />);
      expect(container).toBeInTheDocument();
    });

    test("renders title ", () => {
      const { getByTestId } = render(<ListingCard {...props} />);
      expect(getByTestId("title"));
    });

    test("renders price components", () => {
      const { getByTestId } = render(<ListingCard {...props} />);
      expect(getByTestId("total-price"));
      expect(getByTestId("per-person-price"));
    });

    test("renders price components", () => {
      const { getByTestId } = render(<ListingCard {...props} />);
      expect(getByTestId("total-price"));
      expect(getByTestId("per-person-price"));
    });

    test.each([["price-inclusion-info"], ["user-rating-info"], ["location"]])(
      "When %s prop are not passed in Then should not render corresponding components",
      (testId) => {
        const { getByTestId } = render(<ListingCard {...props} />);
        expect(() => expect(getByTestId(testId))).toThrowError();
      }
    );

    test.each([
      ["view-more-button"],
      ["pricing-information"],
      ["price-inclusion-info"],
      ["user-rating-info"],
      ["location"],
    ])(
      "When %s prop are passed in Then should render corresponding components",
      (testId) => {
        const { getByTestId } = render(<ListingCard {...propsWithOptional} />);
        expect(getByTestId(testId)).toBeInTheDocument();
      }
    );
  });
});
