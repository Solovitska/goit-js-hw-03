'use strict';
function slugify(title) {
    //Replacing dash spaces and converting a string to lowercase
   return title.toLowerCase().replace(/\s+/g, '-');
}
// Audit
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"  