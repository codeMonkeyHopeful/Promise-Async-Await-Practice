// Task 1: Translate the story into code.
const onMyBirthday = (isSick) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (!isSick) {
        resolve(1);
      } else {
        reject(0);
      }
    }, 1000);
  });
};

console.time("Timer");

onMyBirthday(true)
  .then((result) => {
    console.timeLog("Timer");
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Now Party");
  });
