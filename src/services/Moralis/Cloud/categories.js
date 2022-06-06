/* eslint-disable no-undef */
Moralis.Cloud.define("getCategories", async (request) => {
  const queryMainCat = new Moralis.Query("MainCategory");
  const Categories = [];

  const results = await queryMainCat.find({ useMasterKey: true });
  for (let i = 0; i < results.length; i++) {
    let data = {
      mainCat: "",
      subCat: [],
    };
    data.mainCat = results[i].attributes.name;
    const querySubCat = new Moralis.Query("SubCategory");
    var mainCategoryPointer = {
      __type: "Pointer",
      className: "MainCategory",
      objectId: results[i].id,
    };
    querySubCat.equalTo("mainCategory", mainCategoryPointer);
    const results2 = await querySubCat.find({ useMasterKey: true });
    for (let j = 0; j < results2.length; j++) {
      logger.info("I FUCKING EXIST MOTAHAFUCKEREEZADQSDQSD");

      data.subCat.push(results2[j].attributes.name);
    }
    Categories.push(data);
  }

  return Categories;
});
