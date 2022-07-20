import { bankAccount, user, profile } from './data';

export const getUser = (successCallback) => {
  setTimeout(() => {
    successCallback(user);
  }, 2000);
};

export const getUserProfile = (userId, successCallback, errorCallback) => {
  setTimeout(() => {
    if (userId === profile.userId) {
      successCallback(profile);
    } else {
      errorCallback(new Error('invalid userId'));
    }
  }, 2000);
};

export const getUserBankAccount = (userId, successCallback, errorCallback) => {
  setTimeout(() => {
    if (userId === bankAccount.userId) {
      successCallback(bankAccount);
    } else {
      errorCallback(new Error('invalid userId'));
    }
  }, 2000);
};
