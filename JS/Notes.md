# Introduction to Web Dev

## JavaScript

JavaScript is a programming language released in 1995 that has now been adapted by all major browsers as the standard language for web development. The ECMAScript standard is the standard for how JavaScript should be written for web browsers, ECMAScript and JavaScript can be thought of as synonymous. The latest version of ECMAScript is ES6. In 2009, the release of Node.js made it possible for JavaScript to be run in locations other than a browser; such as robots, drones and mobile apps. The model of the web also changed, from pages written in a language such as Java that for every user interaction would result in the entire page reloading, to pages written in JavaScript that have the ability to update specific sections of a page which decreasing loading and response times (as less data is being sent to and from the server). 

For **Value Types** JS has one type for numeric values which is Number, there is no distinction between float and integer for example. String values can be enclosed by either "..." or '...'. To include a set of quotes in a string the alternate quotes must be used to enclose the string. *\n* inserts a line break into a string. Strings can be concatenated via the + operator as usual. Undefined describes a variable that has been created but not assigned a value and null is an empty variable. 

JS has the usual **Comparison Operators** but also includes strictly equal to (===) and not strictly equal to (!===). These were introduced due to the shortcomings of the tradition equal to and not equal to operators. The traditional operators only check the values of the operands while the strict operators compare the values and types. For example, *3 == "3"* returns true while *3 === "3"* returns false. The strict operators are preferred due to these reasons. 

**Expressions** are sections of code that return values, for example a single value, a set of values or a function. **Statements** are sections of code that perform actions or produce behaviours, for example printing a message or changing the value of a variable.

**Variable** names cannot contain hyphens, which are reserved for subtraction. JS is case-sensitive. Underscores can be used to represent spaces or camelCasing can be used where the first character is lowercase and the first character of each subsequent noun is capitalised. 

**Unary operators** perform operations on single variables, unlike binary operators that operate on two values or variables. *y--;* is an example of a unary operator for subtracting one from variable y and assigning the new value to y.

**Control Flow** is the order in which a program's lines of code are executed. *prompt* produces an input popup and *alert* produces a output popup. *confirm* displays a popup message with an OK and Cancel button that will return true or false respectively. Remember that functions can be used as parameters provided they return suitable values, so prompts or confirms can be used as arguments. 

For **random number generation** *Math.random()* can be used which outputs a random number between 0 and 1, including 0 but not 1.

**Arrays** can be defined via [] or using the *Array()* constructor which will return an empty array. When adding elements to the end of an array they can be assigned by using the first unused index (this can be done using the .length property). Arrays can be used as stacks with the *.pop(..)* and *.push(..)* functions. In the reverse *.shift(..)* and *.unshift(..)* functions add and remove items from the beginning of the array. *.slice(..)* will return a number of elements between two indexes but does not change the array. *.splice(..)* on the other hand will remove the elements between the two indexes and return them, changing the original array.

When **debugging** in Google Chrome Developer Tools breakpoints can be set inside of the sources tab. Under the scope tab the values of local and global variables can be seen. Inside the Watch tab specific variables can be selected to be viewed in order to focus on a set of variables during execution.