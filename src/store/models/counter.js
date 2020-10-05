import { action } from 'easy-peasy';

const counter = {
  count: 0,
  plusOne: action((state) => {
    state.count += 1;
  }),
  minusOne: action((state) => {
    state.count -= 1;
  }),
};

export default counter;
