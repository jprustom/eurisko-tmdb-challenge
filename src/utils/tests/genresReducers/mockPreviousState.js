import getRandomElementFromArray from '../../getRandomElementFromArray';

const previousStatesExample = [
  {},
  {
    action: [
      {
        title: 'Action Example',
        id: 1,
      },
      {
        title: 'Action Example 2',
        id: 2,
      },
    ],
    comedy: [
      {
        title: 'Comedy Example',
        id: 1,
      },
      {
        title: 'Comedy Example 2',
        id: 2,
      },
    ],
  },
  {
    action: [
      {
        title: 'Action Example',
        id: 1,
      },
      {
        title: 'Action Example 2',
        id: 2,
      },
    ],
  },
];
const mockPreviousState = () => getRandomElementFromArray(previousStatesExample);
export default mockPreviousState;
