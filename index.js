
function isPalindrome(word) {
  // Write your algorithm here
  var word = word.toLowerCase();
	var wordArray = word.split("");
	var reverseWord = wordArray.reverse().join("");
	return word === reverseWord ? true : false;
}

if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

