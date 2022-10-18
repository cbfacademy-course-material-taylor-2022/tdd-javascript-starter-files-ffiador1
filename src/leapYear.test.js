import {leapYear} from "./leapYear";
describe('The leapYear function', () => {
    it.each`
    input    | expected
    ${1600}  | ${'true'}
    ${1700}  | ${'false'}
    ${1800}  | ${'false'}
    ${1900}  | ${'false'}
    ${2000}  | ${'true'}
    ${2001}  | ${'false'}
    ${2002}  | ${'false'}
    ${2003}  | ${'false'}
    ${2004}  | ${'true'}
    ${2005}  | ${'false'}
    ${2006}  | ${'false'}
    ${2007}  | ${'false'}
    ${2008}  | ${'true'}
    ${2009}  | ${'false'}
    ${2010}  | ${'false'}
    ${2020}  | ${'true'}
    ${2021}  | ${'false'}
    `('should return $expected when given $input', ({input, expected}) => {
      expect(leapYear(input)).toEqual(expected);
    });
  });