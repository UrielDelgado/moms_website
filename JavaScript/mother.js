let mother = {
    name: "Maria",
    age: 40,
    occupation: "Housewife",
    hobbies: ["fixing Clothes", "Crafting", "shopping"],
    favoriteColor: "Black",
    birthplace: "California",
    favoriteFoods: ["Mexican food", "salad"],
    favoriteSayings: ["Comprame esto para mi cumpleanos "],
    giftIdeas: ["a house with a lot of outdoor space", "Flowers", "coffie machine"]
};

let thingsIWantToSay = [
    "Happy mother's day.","I love you.","Your the best mom anyone can ever ask for.","How was your day?"
]
console.log(thingsIWantToSay);

function displayMessage() {
    const randomIndex = Math.floor(Math.random() * thingsIWantToSay.length);
    document.getElementById('message').textContent = thingsIWantToSay[randomIndex];
}