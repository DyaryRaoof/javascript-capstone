import countComments from '../src/js/count-comments.js';

test('should equal to 4', () => {
  const commentsList = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
  expect(countComments(commentsList)).toBe(4);
});

test('should equal to 0', () => {
  const commentsList = [];
  expect(countComments(commentsList)).toBe(0);
});
