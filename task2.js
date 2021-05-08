// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = window.prompt("Enter a number 1-6");
    const randNum = Math.floor(Math.random() * 6 + 1);

    if (isNaN(userNumber)) {
      reject(new Error("Not a number Fucker!"));
    }

    if (userNumber == randNum) {
      resolve({ point: 2, randNum });
    } else if (userNumber == randNum - 1 || userNumber == randNum + 1) {
      resolve({ point: 1, randNum });
    } else {
      resolve({ point: 0, randNum });
    }
  });
};

const continueGame = () => {
  return new Promise((resolve, reject) => {
    if (window.confirm("Do you want to continue?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

// const handleGuess = () => {
//   enterNumber()
//     .then((result) => {
//       alert(`Dice: ${result.randNum}, you got ${result.point} points!`);
//       continueGame().then((result) => {
//         if (result) {
//           handleGuess();
//         } else {
//           alert("Game is done...Fuck off");
//         }
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const handleGuess = async () => {
  try {
    const result = await enterNumber();
    alert(`Dice: ${result.randNum}, you got ${result.point} points!`);

    const isContinuing = await continueGame();

    if (isContinuing) {
      start();
    } else {
      alert("Game is done...Fuck off");
    }
  } catch (error) {
    alert(error);
  }
};

const start = () => {
  handleGuess();
};

start();
