export interface Price {
  totalPrice: number;
  perPersonPrice: number;
}

export interface UserRating {
  userRating?: number;
  totalReviews?: number;
}

export interface PriceInclusionDetails {
  priceIncludes?: Array<string>;
}

export interface Listing extends Price, UserRating, PriceInclusionDetails {
  imageUrl?: string;
  title: string;
  location?: string;
  starRating?: number;
}
