# _{Application Name}_

#### By _**Matt C.**_

#### _{Brief description of application}_

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _JavaScript_
* _Bootstrap_
* _jQuery_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _Clone this repository to your local device_
* _Run index.html in your browser_
* _Enjoy the lovely CSS_

## Known Bugs

* _None so far_

## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems/bugs feel free to send me an email @mc.casperson@gmail.com with details._

Copyright (c) _2021_ _Matt C._

### Tests

Describe: romanNumeral();


Test: When we input a number higher than 3999 or lower than 1 it tells the user an error
Code: romanNumeral(input >= 4000 || input <= 0);
Expected Output: "Number must be between 1-3999"

Test: When we input a non-number it tells the user to input a number
Code: romanNumeral("anything but a number");
Expected Output: "That isn't a number"

Test: When we input the number 1 it returns I
Code: romanNumeral(1);
Expected Output: "I"

Test: When we input a number between 1 and 9 it outputs the correct symbol
Code: romanNumeral(4);
Expected Output: "IV"




thousands - 1=m, 2=mm, 3=mmm can't be higher
hundreds - 1=C, 2=CC, 3=CCC, 4=CD, 5=D, 6=DC, 7=DCC, 8=DCCC, 9=CM
tens - 1=X, 2=XX, 3=XXX, 4=XL, 5=L, 6=LX, 7=LXX, 8=LXXX, 9=XC
ones - 1=I, 2=II, 3=III, 4=IV, 5=V, 6=VI, 7=VII, 8=VIII, 9=IX

input 56 output LVI
5 and 6
L     VI

Symbol  Value
I       1
IV      4
V       5
IX      9
X       10
L       50
C       100
D       500
M       1,000