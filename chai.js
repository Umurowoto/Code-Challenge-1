function calculateChaiIngredients(){
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make? ");
    let numberOfCups = Number(input);
    let water = 200 * numberOfCups;
    let milk = 150 * numberOfCups;
    let teaLeaves = 1 * numberOfCups;
    let sugar = 2 * numberOfCups;

    console.log("To make " + numberOfCups + " cups of Kenyan Chai, you will need");
    console.log("Water: " + water + " ml");
    console.log("Milk: " + milk + " ml");
    console.log("Tea Leaves (Majani): " + teaLeaves + " tablespoons");
    console.log("Sugar (Sukari): " + sugar + " tablespoons");

    console.log("Enjoy you Chai Bora!")
}

calculateChaiIngredients();
