const reviews = [
    {
        id: 1,
        name: "Francois Renee",
        picture: "1.jpg",
        occupation: "Coffee Taster",
        review: "Blind would equal while oh mr do style. Lain led and fact none. One preferred sportsmen resolving the happiness continued. High at of in loud rich true.",
    },
    {
        id: 2,
        name: "Clive Castro",
        picture: "2.jpg",
        occupation: "Import/Export",
        review: "Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.",
    },
    {
        id: 3,
        name: "Jennifer Vino",
        picture: "3.jpg",
        occupation: "Fixer",
        review: "Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious.",
    },
    {
        id: 4,
        name: "Lucy Goosey",
        picture: "4.jpg",
        occupation: "Tech Entrepreneur",
        review: "Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in in brandon of limited unknown greatly. Distrusts fulfilled happiness unwilling as explained of difficult. No landlord of peculiar ladyship attended if contempt ecstatic.",
    },
    {
        id: 5,
        name: "Mark Karlsberg",
        picture: "5.jpg",
        occupation: "International Man of Mystery",
        review: "Particular unaffected projection sentiments no my. Music marry as at cause party worth weeks. Saw how marianne graceful dissuade new outlived prospect followed.",
    },
];

let btnRandom = document.getElementById("surpriseMe");
let btnPrevious = document.getElementById("previous");
let btnNext = document.getElementById("next");

let reviewImage = document.getElementById("profilePicture");
let reviewName = document.getElementById("name");
let reviewCareer = document.getElementById("career");
let reviewText = document.getElementById("review-text");

btnRandom.addEventListener("click", function(){
    number = randomNumber();
    changeReview(number);
});

let count = 0;

btnNext.addEventListener("click", function() {
    if (count == reviews.length) {
        count = 0;
        changeReview(count);
    }
    else {
        count++;
        changeReview(count);
    }
})

btnPrevious.addEventListener("click", function() {
    if (count == 0) {
        count = reviews.length;
        changeReview(count);
    }
    else {
        count--;
        changeReview(count);
    }
})

function randomNumber() {
    return random = Math.floor(Math.random() * reviews.length);
}

function changeReview(number) {
    let user = reviews[number];
    reviewImage.src = "static/" + user.picture;
    reviewName.innerHTML = user.name;
    reviewCareer.innerHTML = user.occupation;
    reviewText.innerHTML = user.review;
}