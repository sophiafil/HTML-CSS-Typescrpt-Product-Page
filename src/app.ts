
let reviewName = document.getElementById("name") as HTMLInputElement;
let rating = document.getElementById("rating") as HTMLInputElement;
let comment = document.getElementById("reviewComment") as HTMLInputElement;
let average = document.getElementById("") as HTMLBaseElement

//array for reviews
let arrayRating:any[]=[];

function addReview():void{
    let newName = document.getElementById('name') as HTMLInputElement;
    let newRating = document.getElementById('rating') as HTMLInputElement;
    let newComment = document.getElementById('reviewComment') as HTMLInputElement;
    let newDate = new Date().toDateString();

    let review = document.getElementById("addNewReview");
    let newDiv = document.createElement("div");
    newDiv.textContent = newName.value + " rated it " + newRating.value + " out of 5 stars on " + newDate + ". Here's why: " + newComment.value;

    review?.appendChild(newDiv);
    arrayRating.push(+newRating.value);
    addAverage();
}

//find the current average
function findAverage(){
    var total = 0;
    var avg = 0
    for(var i = 0; i < arrayRating.length; i++) {
        total += arrayRating[i];
        avg = total / arrayRating.length;
    }
    return avg;
}

//adding new average
function addAverage():void{
    let totalAverage = document.getElementById("totalAverage") as HTMLElement;
    totalAverage.innerText = "Current rating: " + findAverage() + " out of 5 stars";

}
