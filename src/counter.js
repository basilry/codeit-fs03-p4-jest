let count = 0;

const counter = {
  increment: () => {
    count += 1;
  },
  decrement: () => {
    count -= 1;
  },
  set: (value) => {
    count = value;
  },
  get: () => {
    return count;
  },
  reset: () => {
    count = 0;
  },
};

export { counter };