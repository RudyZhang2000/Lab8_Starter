// unit.test.js

const { test } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// for isPhoneNumber

test('Valid phone number 1', () => {
    expect(functions.isPhoneNumber('818-333-3333')).toBe(true);
});

test('Valid phone number 2', () => {
    expect(functions.isPhoneNumber('122-454-8130')).toBe(true);
});

test('Invalid phone number 2', () => {
    expect(functions.isPhoneNumber('123random45')).toBe(false);
});

test('Invalid phone number 2', () => {
    expect(functions.isPhoneNumber('122-')).toBe(false);
});

//test isEmail

test('Valid Email 1', () => {
    expect(functions.isEmail('rudy@ucsd.edu')).toBe(true);
});

test('Valid Email 2', () => {
    expect(functions.isEmail('ben10@alien.com')).toBe(true);
});

test('Invalid Email 1', () => {
    expect(functions.isEmail('122-4548-13110')).toBe(false);
});

test('Invalid Email 2', () => {
    expect(functions.isEmail('rudyatucsd.edu')).toBe(false);
});

// test isStrongPassword

test('Strong Password 1', () => {
    expect(functions.isStrongPassword('XM1_fdsdn452q')).toBe(true);
});

test('Strong Password 2', () => {
    expect(functions.isStrongPassword('br21eUQyb23')).toBe(true);
});

test('Weak Password 1', () => {
    expect(functions.isStrongPassword('1rudy')).toBe(false);
});

test('Weak Password 2', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

//test isDate

test('Valid Date 1', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});

test('Valid Date 2', () => {
    expect(functions.isDate('01/01/1001')).toBe(true);
});

test('Invalid Date 1', () => {
    expect(functions.isDate('123')).toBe(false);
});

test('Invalid Date 2', () => {
    expect(functions.isDate('123/99/9999')).toBe(false);
});

//test isHexColor

test('Valid HexColor 1', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Valid HexColor 2', () => {
    expect(functions.isHexColor('#3BCC12')).toBe(true);
});

test('Invalid HexColor 1', () => {
    expect(functions.isHexColor('blue')).toBe(false);
});

test('Invalid HexColor 2', () => {
    expect(functions.isHexColor('#FF12')).toBe(false);
});