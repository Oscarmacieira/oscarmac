import { useEffect, useState } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { useParams } from "react-router";
import { getDaysFromDate } from "../../utils/Dates";

export const useUserGigs = (_user: any) => {
  const { fetch, data } = useMoralisCloudFunction("getUserGigs", {
    user: _user,
  });
  const params = useParams();

  const [userGigs, setUserGigs] = useState<any>();

  useEffect(() => {
    fetch({
      onSuccess: (data: any) => {
        setUserGigs(data === undefined ? [] : data);
      },
    });
    console.log("using  ccloud funcctions for user gigs");
  }, [_user]);

  return {
    userGigs,
  };
};
