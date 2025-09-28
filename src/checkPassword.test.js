'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@ssword1')).toBe(true);
  });

  it(`should accept only letters from the latin alphabet`, () => {
    expect(checkPassword('P@дддssword1')).toBe(false);
  });

  it(`should have at least 8 characters`, () => {
    expect(checkPassword('P@d1')).toBe(false);
  });

  it(`should have maximum 16 characters`, () => {
    expect(checkPassword('P@assword123445678900000')).toBe(false);
  });

  it(`should have
     at least 1 digit, 1 special character, 1 uppercase letter`, () => {
    expect(checkPassword('password')).toBe(false);
  });
});
