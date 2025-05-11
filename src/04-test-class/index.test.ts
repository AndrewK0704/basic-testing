// Uncomment the code below and write your tests
import { getBankAccount, SynchronizationFailedError } from './index';

describe('BankAccount', () => {
  let myBankAccount = getBankAccount(7);
  let anotherBankAccount = getBankAccount(10);

  beforeEach(() => {
    myBankAccount = getBankAccount(7);
    anotherBankAccount = getBankAccount(10);
  });

  test('should create account with initial balance', () => {
    // Write your test here
    expect(myBankAccount.getBalance()).toBe(7);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => myBankAccount.withdraw(77)).toThrow();
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    expect(() => myBankAccount.transfer(8, anotherBankAccount)).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    expect(() => myBankAccount.transfer(7, myBankAccount)).toThrow();
  });

  test('should deposit money', () => {
    // Write your test here
    expect(myBankAccount.deposit(7).getBalance()).toBe(14);
  });

  test('should withdraw money', () => {
    // Write your test here
    expect(myBankAccount.withdraw(3).getBalance()).toBe(4);
  });

  test('should transfer money', () => {
    // Write your test here
    expect(myBankAccount.transfer(3, anotherBankAccount).getBalance()).toBe(4);
    expect(anotherBankAccount.getBalance()).toBe(13);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your test here
    jest.spyOn(myBankAccount, 'fetchBalance').mockResolvedValue(123);
    expect(typeof (await myBankAccount.fetchBalance())).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    jest.spyOn(myBankAccount, 'fetchBalance').mockResolvedValue(123);
    await myBankAccount.synchronizeBalance();
    expect(myBankAccount.getBalance()).toBe(123);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    jest.spyOn(myBankAccount, 'fetchBalance').mockResolvedValue(null);
    await expect(myBankAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
