// function to capitalize first letter of each word in a given string

export function capitalize (givenString){
	
	// converting string into an array to access each word inside string

	let covertingStringIntoArray = givenString.split(" ");
	
	// 1st approach

	/* for(let i=0; i<=covertingStringIntoArray.length-1; i++){
		covertingStringIntoArray[i] = covertingStringIntoArray[i].charAt(0).toUpperCase() + covertingStringIntoArray[i].substring(1);
	}
	
	let convertingArrayIntoString = covertingStringIntoArray.join(" "); */
	
	// 2nd approach
	
	// Iterating over an array using map() method to access each element (each word of string).
	// charAt(0) is used to get first letter of word and to make it uppercase using toUpperCase()
	// to print remaining string we are using substring(1)

	let transformedArray = covertingStringIntoArray.map(word => word.charAt(0).toUpperCase() + word.substring(1));
	
	// join(" ") is used to convert an array into string with space in between words.

	let convertingArrayIntoString = transformedArray.join(" ");
	
	console.log("Capitalizing First letter of given string: " + givenString + " => ", convertingArrayIntoString);
}

// function to capitalize all lcharacters of string

export function capitalizeAll(givenString){
	
	// to access each character of string we need to split string into array

	let convertingStringIntoArray = givenString.split("");

	// to access each character of array we need iterate an array
	// We know that there is a difference of 32 in between the ascci code of small alphabte and capital alphabet
	// a = 97 and A = 65 so 97-65 = 32
	// if we manage to convert small character ascii value into capiatal character ascii then by using
	// String.fromCharCode() we can replace small alphabet with capital alphabet

	for (let i = 0; i < convertingStringIntoArray.length; i++) {
		convertingStringIntoArray[i] = String.fromCharCode(convertingStringIntoArray[i].charCodeAt(0)-32);
	}

	// here we are using join("") method to remove space inbetween characters and convert into string

	let desiredString = convertingStringIntoArray.join("");
	console.log(desiredString);

	/*let convertingStringIntoArray = givenString.split(" ");
	
	let transformedArray = convertingStringIntoArray.map(word => word.toUpperCase());
	
	let convertingArrayIntoString = transformedArray.join(" ");
	
	console.log(convertingArrayIntoString);*/
}

// function to check whether the particular string exist in given string or not
// if exist then return true, if not then return false.
// givenString parameter is holding a string 
// wordToCheck is holding the word to check if exist or not

export function isExist (givenString, wordToCheck){
	
	// to check whether wordToCheck exist or not, we need to compare that word with all th word in the string
	// to access all the word we need to split string into words so we are using slit() method

	let convertingStringIntoArray = givenString.split(" ");
	
	// here we are declaring count variable to check that word exist or not
	let count = 0;

	// here we are iterating using for loop to access each word in an array.
	// by using if condition we are checking each word with wordToCheck
	
	for(let i=0; i<convertingStringIntoArray.length; i++){
		if(convertingStringIntoArray[i]==wordToCheck){
			count++;
		}
		else{
			count = 0;
		}
	}
	
	// if wordToCheck is exist in givenString then its count must equal to or greater than 1
	// if the count is greater than one then return true else return false

	if(count>0){
		return true;
	}
	else{
		return false;
	}
}


// function to check whether particular string occurred how many times in the given string 
// function has two parameters -
// givenString parameter is holding a givenString and occurrenceWord is holding word that occurred in the given string

export function getOccurrenceCount (givenString, occurrenceWord){
	
	let convertingStringIntoArray = givenString.split(" ");
	
	let count = 0;
	
	for(let i=0; i<convertingStringIntoArray.length; i++){
		if(convertingStringIntoArray[i]==occurrenceWord){
			count++;
		}
	}
	
	if(count>0){
		return count;
	}
	else{
		console.log('${occurrenceWord} is not present in the given string');
	}
}

//function to calculate the wordDensity of a given string.
// Word density is defined as (occurrenceCount / totalWords) * 100
// here there are two parameters - 
// givenString is holding string and densityWord is holding word whose density we need to calculate 
// to calculate wordDensity we need to calculate occcurenceCount and total number of words in the given string

export function wordDensity(givenString, densityWord){
	

	let convertingStringIntoArray = givenString.split(" ");
	
	let occurrenceCount = 0;
	
	for(let i=0; i<=convertingStringIntoArray.length-1; i++){
		if(convertingStringIntoArray[i]==densityWord){
			occurrenceCount++;
		}
	}
	
	return (occurrenceCount/convertingStringIntoArray.length)*100;
}


//function to extract the file extension from a given string representing a file name. If no extension is present, return null.

export function getExt(givenString){

	//here if .(dot) exists that means file has extension and . is not exists then file has not extension then in that case return null.
	
	if(givenString.includes(".")){

		// here we are spliting string using . separator into array

		let convertingStringIntoArray = givenString.split(".");

		// if . is there that means string has two things file name and extension. Thats why we are returning like bellow.

		return convertingStringIntoArray[0] + " " + convertingStringIntoArray[1];
	}
	else{
		return null;
	}
}

// function to remove white space from the given string


export function removeWhitespace (givenString){
	
	// here we are splitting string into array 

	let convertingStringIntoArray = givenString.split(" ");

	//here we are defining empty array to store only words and avoid spaces.

	let extractedString = [];
	for(let i=0; i<=convertingStringIntoArray.length-1; i++){

		// by using if condition we are avoiding spaces available at varies indices and we are pushing onlt words using push() method

		if(convertingStringIntoArray[i]!=''){
			extractedString.push(convertingStringIntoArray[i]); 
		}
	}

	// converting an array into string using space separator 
	
	let stringWithRemovedWhiteSpace = extractedString.join(" ");
	
	return stringWithRemovedWhiteSpace;
}

// function to reverse the given string sentence

export function reverseWords(sentence){
	
	// here are are defining empty string to store reverse characters from array

	let reverseString = " ";

	// here we are ie=terating over string in reverse

	for(let i=sentence.length-1; i>=0; i--){
		reverseString += sentence[i];
	}
	
	// using trim() method we are removing whitespace at the start of a string

	return reverseString.trim();
}

// function to count vowels in a given string

export function countVowels(givenString){

	// 1st approach

	/*let count = 0;
	
	for(let i=0; i<=givenString.length-1; i++){
		
		if(givenString[i].match(/a/ig)){
			count++;
		}
		
		else if(givenString[i].match(/e/ig)){
			count++;
		}
		
		else if(givenString[i].match(/i/ig)){
			count++;
		}
		
		else if(givenString[i].match(/o/ig)){
			count++;
		}
		
		else if(givenString[i].match(/u/ig)){
			count++;
		}
	}
	
	return count; */

	//2nd approach

	// we are using match() method to find out all vowels present in given string
	// match() method check the [aeiou] gloabally and return returns array of matches
	// at last we are returning length of that match array.

	let match = givenString.match(/[aeiou]/ig);
	return match.length;

}

// function to check whether the given string is palindrome string or not
// A string is called a palindrome if the reverse of the string is the same as the original one. Example: “madam”, “racecar”

export function isPalindrome(givenString){
	
	//defining empty string to hold the reverse string

	let reverseString = " ";

	//ierating over the given string in reverse and storing elements in another string

	for(let i=givenString.length-1; i>=0; i--){
		reverseString += givenString[i];
	}
	
	//trim() is used here to remove white space from the start of string 

	reverseString = reverseString.trim();

	//checking if reverse string and original string are same or not. If same them print Palindrome string else print not palindrome

	if(reverseString==givenString){
		console.log("Given String is Palindrome");
	}
	else{
		console.log("Given String is not Palindrome");
	}
}


//function to add ellipsis at the end of given string

export function truncateString (givenString){
	
	//here we are using slice() method to  slice the string upto 10 characters so that remaining will be in ellipsis 

	let slicedString = givenString.slice(0, 10);
	
	//let stringWithEllipsis = slicedString.padEnd(13, ".")
	
	// here we are concating slicedString with ... dots

	let stringWithEllipsis = slicedString + "...";
	
	console.log(stringWithEllipsis);
}


//function to pad stars(*) at the beginning
//starsToBeAdded paramteter is holding the value of how many stars we want to add

export function maskString(givenString, starsToBeAdded){
	
	//in a given string how many stars we are adding upto which we are slicing the given string

	let slicedString = givenString.slice(starsToBeAdded);
	
	// we are iterating for loop for to concate specified number of stars

	for(let i=0; i<starsToBeAdded; i++){
		slicedString = "*" + slicedString;
	}
	
	console.log(slicedString);
}


//function to validate email whether it is in the correct format or not

export function validateEmail(givenEmail){

	//here we are using match() method that checks the given string is accourding to regular expression or not.
	//If given string matches with the relualar expression then it returns the array of matches
	//It returns array of matches only when the given string match with regular expression otherwise return null in array
	// If not null return true that means email is a valid email otherwise return false if not valid email0.

	let emailValidationResult = givenEmail.match(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm);
	if(emailValidationResult!=null){
		return true;
	}
	else{
		return false;
	}
}
