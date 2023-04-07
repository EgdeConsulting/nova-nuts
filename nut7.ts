// Gray 6 bit represented as binary, from 1-50, in order in a ts function
function CreateGrayCode() {
  let binaryArray = new Array();

for (let number = 1; number < 51; number++) {
  const grayCode = encode(number)
  const decodedGrayCode = decode(grayCode)

  console.log(
      number,
      number.toString(2),
      grayCode.toString(2).padStart(6, '0'),
      decodedGrayCode
  )
  binaryArray.push(grayCode.toString(2).padStart(6, '0'));
}
  let binaryString = binaryArray.join('');
  console.log(binaryString);
}

function encode (number) {
  return number ^ (number >> 1)
}

function decode (encodedNumber) {
  let number = encodedNumber

  while (encodedNumber >>= 1) {
      number ^= encodedNumber
  }

  return number
}

CreateGrayCode();