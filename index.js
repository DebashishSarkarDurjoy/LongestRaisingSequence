//let numbers = [4,6,-3,3,7,9];
let numbers = [9,6,4,5,2,0];

function longestRaisingSequence(numbers) {
  let output = [];
  let startIndex = 0;
  let endIndex = 0;
  let turn = false;

  for (let i = 0; i < numbers.length-1; i++) {
    if (numbers[i] < numbers[i+1]) {
      if (!turn) {
        turn = true;
        startIndex = i;
      }
      endIndex = i+1;
    }
    else turn = false;
  }


  for (let i = startIndex; i <= endIndex; i++) {
    output.push(numbers[i]);
  }

  return output;
}

longestRaisingSequence(numbers);
