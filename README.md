# Javascript Password Generator

## Summary

This aim of this project was to create a pseudo random password generator using pure javascript and to then edit the existing HTML to display it. The HTML and CSS were provided and event listeners already set.

**Disclaimer:** _This will not generate a true websafe random password and is intended as a demo_

## Main Features

The generator consists of 5 key parts:

1. Declaring global variables and functions.
2. Setting the length of the password.
3. Choosing the types of characters used.
4. Generating the result.
5. Printing the result to the webapp.

### Global Declarations

This section first links the \#generate button to a variable so that an event query can be put on it later.

I created two functions called 'genLowCase' and 'genUpCase' to generate both lower and uppercase alphabets respectively, the reason for this is to improve readability and just in case I want to use it again if I add to this app. This also keeps doc size to a minimum.

I declared an array of numbers outright as generating it used more code.

I used the split method to creat an array of special characters, this was once again to save space as it required 63 character less and is considerably easier on the eyes than the alternative.

### Password Length

This sets a variable called passwordLen using a prompt that abides to specification (8 <= passwordLen <= 128). This has numerous error handlers for incorrect inputs and also includes a check to see if the user has pressed cancel or entered a blank value; this cancels the app. These error checkers are present throughout the app.

### Character Types

I first created an empty object, an array with different character types in it and a counter for types selected. I then created a for loop that iterated through the different types, asking the user if they wanted to include them, then storing that information in the aforementioned object for use later. This also has an error handler for unexpected inputs and is nested whithin a while loop to handle a user choosing no types. This is once again followed by cancel check.

### Password Generation

This generates a charset array to use based off of user input in [Character Types](#character-types), using the generators and charactar sets from [Global Declarations](#global-declarations).

I declared a local function called randomiser that chooses a random number between 0 (inclusive) and the length of the charSet array.

It then generates the password in a for loop that randomly selects characters from the array and adds them to a string using the [passwordLength](#password-length) variable to set the number of iterations. This string is then returned.

### Printing Result

The writePassword function takes the returned password from the generator and then adds it to the \#password text box for the user to see. This is all actioned when the user clicks the eent listener on the [generate button](#global-declarations).
