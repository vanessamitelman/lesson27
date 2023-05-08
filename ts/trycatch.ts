interface UserI {
  fName: string;
  lName: string;
  age: number;
}

const user1: UserI = {
  fName: 'Vanessa',
  lName: 'Mitelman',
  age: 50
};
try {
  console.log('www');
} catch (e) {
  console.log(e);
}
console.log('last');
