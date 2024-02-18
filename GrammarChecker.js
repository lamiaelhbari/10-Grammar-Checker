// Challenge Grammar Checker --->

let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";
console.log(storyWords);

//1- Separate each element of the array by a space in the string :

// console.log(storyWords.join(' '));

/* 2- For each word in the storyWords array, we want the count variable to 
be incremented by one : */
let count = 0;
storyWords.forEach((word) => {
  return count++;
});
console.log(count);

// 3- Filtering the words :
storyWords = storyWords.filter((word) => {
  if (word !== unnecessaryWord) {
    return word;
  }
});
// console.log(story);

// 4- Replacing the words :
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? "beautiful" : word;
});

badWordIndex = storyWords.findIndex((word) => {
  if (word === badWord) {
    return word;
  }
});

console.log(badWordIndex);

storyWords[badWordIndex] = "really";

// 5- Check Length Words :
const lengthCheck = storyWords.every((word) => {
  return word.length <= 10
    ? console.log("One or more words have more than 10 characters")
    : console.log("Each word in the story has 10 characters or less");
});
console.log(lengthCheck);

const wordGreaterTenChar = storyWords.filter((word) => {
  if (word.length > 10) {
    return word;
  }
});
console.log(wordGreaterTenChar);

// 6 - Reading our story :
console.log(storyWords.join(" "));
