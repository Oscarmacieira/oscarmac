export const generateURLFromCat = (elem) => {
  return elem.replace(" & ", "-").replace(" ", "-").toLowerCase();
};

export const generateURLForSubCat = (elem) => {
  return elem.replace(" ", "-").replace("&", "and").toLowerCase();
};

export const goToSubCat = (mainCat, subCat) => {
  return `categories/${generateURLFromCat(mainCat)}/${generateURLForSubCat(
    subCat
  )}`;
};

export const URLtoMainCat = (name: string) => {
  const str = name;
  //split the above string into an array of strings
  //whenever a blank space is encountered
  const arr = str
    .replace("-", " & ")
    .replace("/", "")
    .replace("categories/", "")
    .split(" ");
  //loop through each element of the array and capitalize the first letter.

  //loop through each element of the array and capitalize the first letter.

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    if (arr.length <= 2) {
      arr[i].toUpperCase();
    }
  }
  const str2 = arr.join(" ");
  return `${str2}`;
};

export const URLtoSubCat = (name: string) => {
  const str = name;
  //split the above string into an array of strings
  //whenever a blank space is encountered
  const arr = str
    .replace("-and-", " & ")
    .replace("-", " ")
    .replace("/", "")
    .replace("categories/", "")
    .split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  arr.forEach((elem, idx) => {
    if (elem.length <= 3) {
      arr[idx] = elem.toUpperCase();
    }
  });
  const str2 = arr.join(" ");
  return `${str2}`;
};
