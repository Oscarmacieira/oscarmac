import { useEffect, useState } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { useParams } from "react-router";
import { getDaysFromDate } from "../../utils/Dates";

export const useUserDetail = (_address: any) => {
  const { fetch } = useMoralisCloudFunction("getUserDetail", {
    address: _address,
  });
  const { user } = useMoralis();
  const params = useParams();

  const [userId, setUserId] = useState();

  const [userCaption, setUserCaption] = useState();
  const [username, setUsername] = useState();
  const [userAddress, setUserAddress] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [userCountryLabel, setUserCountryLabel] = useState();
  const [userSince, setUserSince] = useState<any>();
  const [userDescription, setUserDescription] = useState<any>();
  const [userLanguage, setUserLanguage] = useState<any>();
  const [userSkills, setUserSkills] = useState<any>();
  const [userEducation, setUserEducation] = useState<any>();
  const [userCertification, setUserCertification] = useState<any>();

  useEffect(() => {
    fetch({
      onSuccess: (data: any) => {
        setUserId(data[0].id);
        setUserCaption(data[0].attributes.caption);
        setUsername(data[0].attributes.username);
        setUserAddress(data[0].attributes.ethAddress);
        setUserAvatar(data[0].attributes.avatarPic._url);
        setUserCountryLabel(data[0].attributes.countryLabel);
        setUserSince(getDaysFromDate(data[0].attributes.createdAt));
        setUserDescription(data[0].attributes.description);
        setUserLanguage(
          data[0].attributes.languages &&
            data[0].attributes.languages !== undefined
            ? data[0].attributes.languages
            : []
        );
        setUserSkills(
          data[0].attributes.skills && data[0].attributes.skills !== undefined
            ? data[0].attributes.skills
            : []
        );
        setUserEducation(
          data[0].attributes.education &&
            data[0].attributes.education !== undefined
            ? data[0].attributes.education
            : []
        );
        setUserCertification(
          data[0].attributes.certification &&
            data[0].attributes.certification !== undefined
            ? data[0].attributes.certification
            : []
        );
      },
    });
  }, [user, params.user]);

  return {
    userId,
    userCaption,
    username,
    userAddress,
    userAvatar,
    userCountryLabel,
    userSince,
    userDescription,
    userLanguage,
    userSkills,
    userEducation,
    userCertification,
  };
};
