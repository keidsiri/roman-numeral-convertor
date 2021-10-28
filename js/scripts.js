function romanNumerals(number) {
  if (!parseInt(number)) {
    return "Please input a number";
  }
  if (parseInt(number) > 3999 || parseInt(number) < 1) {
    return "Please input a number between 1-3,999";
  }
  const onesNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tensNumerals = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hundredsNumerals = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const thousandsNumerals = ["M", "MM", "MMM"];

  
  return onesNumerals[parseInt(number) - 1];
}






