# 🇰🇪 Kenyan Everyday Tools in JavaScript

This project includes three simple and interactive JavaScript utilities that simulate common Kenyan daily life scenarios:

1. ☕ Chai Bora Ingredient Calculator  
2. 🛵 Boda Boda Fare Estimator  
3. 📱 Mobile Money Transaction Fee Estimator

These tools use browser prompts for input and print user-friendly messages to the console.

---

## ☕ 1. Chai Bora Ingredient Calculator

### 📝 Description
Calculates the exact amount of ingredients needed to prepare a given number of cups of authentic Kenyan chai.

### 📋 Standard Recipe (per cup)

- Water: 200 ml  
- Milk: 50 ml  
- Tea Leaves (Majani): 1 tablespoon  
- Sugar (Sukari): 2 teaspoons

### ▶️ How It Works

- Prompts user:  
  `Karibu! How many cups of Chai Bora would you like to make?`

- Example Output (for 3 cups):

To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!
---

## 🛵 2. Boda Boda Ride Fare Estimator

### 📝 Description
Estimates the total cost of a boda boda ride based on the distance in kilometers.

### 💰 Fare Structure

- Base Fare: KES 50  
- Per Kilometer: KES 15

### ▶️ How It Works

- Prompts user:  
`Unafika wapi Mkubwa? Kilometer ngapi?:`

- Example Output (for 5 km):

Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!

## 📱 3. Mobile Money Transaction Fee Estimator

### 📝 Description
Estimates transaction fees when sending money via mobile money platforms using a simplified fee structure.

### 💸 Fee Structure

- 1.5% of transaction amount  
- Minimum Fee: KES 10  
- Maximum Fee: KES 70

### ▶️ How It Works

- Prompts user:  
`Unatuma Ngapi? (KES):`

- Example Outputs:

- **KES 500**

  ```
  Sending KES 500:
  Calculated Transaction Fee: KES 10
  Total amount to be debited: KES 510

  Send Money Securely!
  ```

- **KES 2000**

  ```
  Sending KES 2000:
  Calculated Transaction Fee: KES 30
  Total amount to be debited: KES 2030

  Send Money Securely!
  ```

- **KES 10000**

  ```
  Sending KES 10000:
  Calculated Transaction Fee: KES 70
  Total amount to be debited: KES 10070

  Send Money Securely!
  ```

---

## 🛠️ How to Use

1. Open the browser developer console.
2. Copy and paste the desired JavaScript code.
3. Respond to the prompt and view the output in the console.

Alternatively, include the scripts in an HTML file and open in a browser for a basic UI-free interaction.

---

## 📁 File Structure

/Code-challenge-1
├── chaiCalculator.js
├── bodaFareEstimator.js
├── transactionFeeEstimator.js
└── README.md

