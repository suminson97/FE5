const arr = [];
while (arr.length < 6) {
  let lotto = parseInt(Math.random() * 45 + 1);

  if (arr.includes(lotto) === false) {
    arr.push(lotto);
  }
}

arr.sort((a, b) => a - b);
