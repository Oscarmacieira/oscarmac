/* eslint-disable no-undef */
Moralis.Cloud.define("getUserDetail", async (request) => {
  const query = new Moralis.Query("User");
  query.equalTo("ethAddress", request.params.address);
  const user = await query.find({ useMasterKey: true });
  return user;
});

Moralis.Cloud.define("getUserGigs", async (request) => {
  const query = new Moralis.Query("Gig");
  var userPointer = {
    __type: "Pointer",
    className: "_User",
    objectId: request.params.user,
  };
  query.equalTo("user", userPointer);
  const result = await query.find({ useMasterKey: true });

  // get the address of the user
  const userQuery = new Moralis.Query("User");
  userQuery.equalTo("objectId", request.params.user);
  const user = await userQuery.find({ useMasterKey: true });

  const userAddress = user[0].attributes.ethAddress;

  const gigList = [];

  for (let i = 0; i < result.length; i++) {
    gigList.push({
      title: result[i].attributes.title,
      seller: userAddress,
    });
  }
  logger.info(JSON.stringify(gigList));

  return gigList;
});

// Moralis.Cloud.define("getUserLanguage", async (request) => {
//   const address = request.params.address;
//   const query = new Moralis.Query("User");
//   query.equalTo("ethAddress", address);

//   const data = await query.find({ useMasterKey: true });

//   if (data.attributes.languages) {
//     return data.attributes.languages;
//   } else {
//     return [];
//   }
// });

// //

// Moralis.Cloud.define("updateUserLanguage", async (request) => {
//   const address = request.params.address;
//   const newLanguage = request.params.newLanguage;
//   const user = Moralis.Object.extend("_User");
//   const query = new Moralis.Query(user);
//   query.equalTo("ethAddress", address);

//   const data = await query.find({ useMasterKey: true });

//   if (data.attributes.languages !== undefined) {
//     const { languages } = data.attributes;
//     languages.push(newLanguage);
//     data.set("languages", languages);
//   } else {
//     data.set("languages", [newLanguage]);
//   }

//   await data.save(null, { useMasterKey: true });
// });

Moralis.Cloud.beforeSave("Skill", async (request) => {
  const _name = request.object.get("name");
  const _id = request.object.id;

  const Skill = Moralis.Object.extend("Skill");
  const query = new Moralis.Query(Skill);
  query.matches("name", _name, "i");
  const duplicate = await query.find();

  if (duplicate.length !== 0) {
    if (duplicate[0].id === _id) {
      logger.info("Modifying a skill");
    } else {
      if (duplicate[0].attributes.name.toLowerCase() === _name.toLowerCase()) {
        logger.info("This Skill already exists");
        throw "validation error";
      } else {
        logger.info("This Skill doesn't exist yet in our db");
      }
    }
  } else {
    logger.info("No match in db");
  }
});
