import {fizzBuzz, projectName} from "./index";

// //describe('Starter project should', () => {
//   it('output its name', () => {
//     expect(projectName()).toEqual('Kata starter project');
//   });
// });


describe('The fizzBuzz function', () => {
  it.each`
  input | expected
  ${1}  | ${1}
  ${2}  | ${2}
  ${3}  | ${'Fizz'}
  ${4}  | ${4}
  ${5}  | ${'Buzz'}
  ${6}  | ${'Fizz'}
  ${7}  | ${7}
  ${8}  | ${8}
  ${9}  | ${'Fizz'}
  ${10} | ${'Buzz'}
  ${11} | ${11}
  ${12} | ${'Fizz'}
  ${13} | ${13}
  ${14} | ${14}
  ${15} | ${'FizzBuzz'}
  `('should return $expected when given $input', ({input, expected}) => {
    expect(fizzBuzz(input)).toEqual(expected);
  });
});





