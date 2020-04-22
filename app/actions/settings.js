import { COUNTER_UP } from './types';

export const count = counter => ({
    type: COUNTER_UP,
    counter,
});

export default {
    count,
};
