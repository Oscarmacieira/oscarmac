import { useEffect, useState } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { getDaysFromDate } from "../../utils/Dates";

export const useCategories = () => {
  const { fetch, data } = useMoralisCloudFunction("getCategories");

  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    fetch({
      onSuccess: (data: any) => {
        setCategories(data === undefined ? [] : data);
        console.log(data);
      },
    });
  }, []);

  return {
    categories,
  };
};
