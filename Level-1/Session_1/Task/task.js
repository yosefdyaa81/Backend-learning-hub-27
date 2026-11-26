/*
 * The Great Pizza Disaster of 2026 🍕
 *
 * Ahmed is starving at 2 AM, and Khaled the delivery guy
 * has lost his way because his GPS stopped working.
 * Help Khaled deliver the pizza before it turns into a frisbee!
 */

// ==========================================
// 1️⃣ Values & Variables
// ==========================================
let studentName ="ahmed";
const pizzaFlavor ="pepperoni";




// ==========================================
// 2️⃣ Data Types
// ==========================================
let hungerLevel =10;
let isPizzaHot =true;
let deliveryAddress="el maaarg";

console.log(typeof(hungerLevel));
console.log(typeof(isPizzaHot));
console.log(typeof(deliveryAddress));


// ==========================================
// 3️⃣ Type Conversion & Coercion
// ==========================================
let total = "85";
total = Number(total) + 15;
total += true ;
console.log(total);


// ==========================================
// 4️⃣ Basic Operators
// ==========================================
pizzaCost = 85;
tips = 15;
totalBill=pizzaCost + tips;
minutesWaiting=45+15;

if(minutesWaiting % 2 === 0) {
    console.log("its an even number  ");
} else {console.log("The pizza is cold!");}


// ==========================================
// 5️⃣ Operator Precedence
// ==========================================

console.log(2 + 3 * 4 - 1);
console.log((2 + 3) * (4 - 1));


// ==========================================
// 6️⃣ If / Else Statements
// ==========================================
if(pizzaisHot&&hungerLevel>7){
console.log("OPEN THE DOOR AND SPRINT");
}else if(hungerLevel>=5||hungerLevel<=7){
    console.log("Walk, you have dignity");
}
else{console.log("Order sushi next time");}


// ==========================================
// 7️⃣ Statements & Expressions
// ==========================================
hungerLevel > 5
//its an expression because it returns a value 1 or 0
if (hungerLevel > 5) {}
//its a statement because it makes an action

// ==========================================
// 8️⃣ Strings
// ==========================================
pizzaFlavor.toUpperCase();
console.log(pizzaFlavor.length());
console.log(pizzaFlavor.includes("pepper"));




// ==========================================
// 9️⃣ Template Literals
// ==========================================

console.log(`student name ${studentName} pizza flavor ${pizzaFlavor} total bill ${totalBill} minutes waiting ${minutesWaiting}`);


// ==========================================
// 🔟 Intro to Arrays & Objects
// ==========================================
let toppings = ["pepperoni", "mushrooms", "onions"];
let order={customerName: studentName, pizzaFlavor: pizzaFlavor,totalBill: totalBill, minutesWaiting: minutesWaiting , isdilivered: false};
order.isdilivered = true;


// ==========================================
// 1️⃣1️⃣ Functions & Arrow Functions
// ==========================================
function calculateTotal(pizzaCost, tips) {
    return pizzaCost + tips;
}   
const calculateTotalArrow = (pizzaCost, tips) => {
    return pizzaCost + tips;
};

calculateTotal(85, 15);
calculateTotalArrow(85, 15);


// ==========================================
// 1️⃣2️⃣ Loops
// ==========================================
let stops = ["Ahmed", "Sara", "Mona", "Tarek"];
for(let i = 0; i < stops.length; i++) {
    if(stops[i] === "Ahmed") {break;}

    console.log(stops[i]);
}


// ==========================================
// 1️⃣3️⃣ Comments
// ==========================================

//calc total

/* 
    momken mohsens
 */

// 🍕 GOOD LUCK! HELP KHALED DELIVER AHMED'S PIZZA! 🍕
