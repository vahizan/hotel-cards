import { useEffect, useState } from "react";
import axios from "../axios";

export const useListings = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get("posts")
      .then((response) => {
        setListings(response.data);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [setListings]);
  return {
    isLoading,
    isError,
    listings,
  };
};
