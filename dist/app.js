"use strict";
let reviewName = document.getElementById("name");
let rating = document.getElementById("rating");
let comment = document.getElementById("reviewComment");
let average = document.getElementById("");
//array for reviews
let arrayRating = [];
function addReview() {
    let newName = document.getElementById('name');
    let newRating = document.getElementById('rating');
    let newComment = document.getElementById('reviewComment');
    let newDate = new Date().toDateString();
    let review = document.getElementById("addNewReview");
    let newDiv = document.createElement("div");
    newDiv.textContent = newName.value + " rated it " + newRating.value + " out of 5 stars on " + newDate + ". Here's why: " + newComment.value;
    review?.appendChild(newDiv);
    arrayRating.push(+newRating.value);
    addAverage();
}
//find the current average
function findAverage() {
    var total = 0;
    var avg = 0;
    for (var i = 0; i < arrayRating.length; i++) {
        total += arrayRating[i];
        avg = total / arrayRating.length;
    }
    return avg;
}
//adding new average
function addAverage() {
    let totalAverage = document.getElementById("totalAverage");
    totalAverage.innerText = "Current rating: " + findAverage() + " out of 5 stars";
}
//# sourceMappingURL=app.js.map