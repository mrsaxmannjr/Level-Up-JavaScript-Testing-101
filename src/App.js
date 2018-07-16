export const hello = () => 'Hello';

export const add = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }
  return x + y;
};

export const removeSNames = (nameArray) => nameArray.filter(name => name.toLowerCase().charAt(0) !== 's');

export const filterNames = (nameArray) => nameArray.filter(name => name.toLowerCase() === 'james');