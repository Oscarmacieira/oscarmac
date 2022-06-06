import { Categories } from "../utils/Settings";

export function getMainCat() {
  let mainCategories: any = [];
  Categories.forEach((cat) => {
    return mainCategories.push(cat.mainCat);
  });
  return mainCategories;
}

export function getSubCat() {
  let subCategories: any = [];
  Categories.forEach((cat) => {
    return subCategories.push(cat.subCat);
  });
  return subCategories;
}

export function getDetailfromMainCat(CatName: any) {
  const subCat = Categories.find(({ mainCat }) => mainCat === CatName);
  return subCat?.subCat;
}
