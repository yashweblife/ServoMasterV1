// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { createStep } from './utils/utils';

// Mock matchmedia
window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};
test("Create A Step",()=>{
  expect(createStep()).toBe({
    angle_end: 0,
    angle_start: 0,
    delay: 1,
    name: "Step 1",
    servo: 1,
    size: 1,
    type: "step",
  })
})