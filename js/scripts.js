function romanNumerals(number) {
  if (typeof number !== "number") {
    return "Please input a number";
  }
  if (parseInt(number) > 3999 || parseInt(number) < 1) {
    return "Please input a number between 1-3,999";
  }
  const onesNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return onesNumerals[parseInt(number) - 1];
}






