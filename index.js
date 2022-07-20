import { getUser, getUserBankAccount, getUserProfile } from './service';

console.log('start fetch data');

const callback = (result) => {
  console.log('user data', result);
  getUserBankAccount(result.id, (result) => {
    console.log('bank data', result);
  });

  getUserProfile(result.id, (result) => {
    console.log('user profile data', result);
  });
};

getUser(callback);

console.log('stop fetch data');

// task: convert function in service.js to promise

// call services using promise and async await
// case 1: call getUserBankAccount after call getUserProfile
// case 2: call getUserBankAccount and getUserProfile parallel
// create variable to store data from services
