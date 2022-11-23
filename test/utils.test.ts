import { upperCase } from '../src/utils';

describe('upperCase works on:', () => {
  test('NameInUpperCase', () => {
    expect(upperCase('NameInUpperCase')).toEqual('NameInUpperCase');
  });

  test('nameInCamelCase', () => {
    expect(upperCase('nameInCamelCase')).toEqual('NameInCamelCase');
  });

  test('nameinlowercase', () => {
    expect(upperCase('nameinlowercase')).toEqual('Nameinlowercase');
  });

  test('name-with-dashes', () => {
    expect(upperCase('name-with-dashes')).toEqual('NameWithDashes');
  });
});