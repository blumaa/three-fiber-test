const getRndInteger = (min: number, max: number) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 0.01;
};
const randNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randColor = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

const randArray = (): [number, number, number] => [
  randNum(-3, 3),
  randNum(-3, 3),
  randNum(-3, 3),
];

const randomPosNegNum =()=> Math.floor(Math.random() * 31) - 19;

const randArrayPosNeg = (): [number, number, number] => [
  randomPosNegNum(),
  randomPosNegNum(),
  randomPosNegNum(),
];

export { getRndInteger, randArray, randColor, randNum, randomPosNegNum, randArrayPosNeg };
