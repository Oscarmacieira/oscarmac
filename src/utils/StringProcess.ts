export function containsSpecialChars(str) {
  const specialChars = `\`@#$%^&*_+\-=\[\]{};"\\|<>\/?~`;

  const result = specialChars.split("").some((specialChar) => {
    if (str.includes(specialChar)) {
      return true;
    }

    return false;
  });

  return result;
}

export function onlyLettersAndNumbers(str) {
  return /^[A-Za-z0-9]*$/.test(str);
}
