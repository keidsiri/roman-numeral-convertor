function romanNumerals(number) {
  if (!parseInt(number)) {
    return "'NaN : Please enter the number'";
  }
  if (parseInt(number) > 3999) {
    return "'Too Big'";
  }
  if (parseInt(number) < 1) {
    return "'Too Small'";
  }
  const onesNumerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tensNumerals = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hundredsNumerals = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const thousandsNumerals = ["", "M", "MM", "MMM"];
  let output = [];
  let input = number.split('');
  if (input.length === 1) {
    output.push(onesNumerals[input[0]]);
  } else if (input.length === 2) {
    output.push(tensNumerals[input[0]]);
    output.push(onesNumerals[input[1]]);
  } else if (input.length === 3) {
    output.push(hundredsNumerals[input[0]]);
    output.push(tensNumerals[input[1]]);
    output.push(onesNumerals[input[2]]);
  } else if (input.length === 4) {
    output.push(thousandsNumerals[input[0]]);
    output.push(hundredsNumerals[input[1]]);
    output.push(tensNumerals[input[2]]);
    output.push(onesNumerals[input[3]]);
  }

  return output.join('');
}

//input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g,"");
 /*
take the input
remove the punctuation
split into array of multiple numbers
array.foreach(function(element) {
  print romanNumerals(element) + " "
})

print all the returns followed by spaces
*/

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();

    //sanitize the input of all excess punctuation and spaces
    let input = $("#input").val().replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
    let inputArr = input.split(' ');
    let outputArr = [];

    inputArr.forEach(function(element) {
      outputArr.push(romanNumerals(element));
    });
    
    // $("ul").empty();
    $("#output").text(outputArr)

    // outputArr.forEach(function(number) {
    //   $("ul").append("<li>" + number + "</li>");
    // });
  });
});

