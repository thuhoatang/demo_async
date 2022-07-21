import { getUser, getUserBankAccount, getUserProfile } from "./service";
import {
  getUserPromise,
  getUserProfilePromise,
  getUserBankAccountPromise,
} from "./service.promise";

// case 1:   call getUserBankAccount after call getUserProfile
// Hòa làm
console.log("start fetch data");
let store = {}
await getUserPromise()
  .then(function (user) {
    store.user = user;
    return getUserBankAccountPromise(store.user.id);
  })

  .then(function (bankAccount) {
    store.bankAccount = bankAccount;
    return getUserProfilePromise(store.user.id)
  })

  .then(function (profile) {
    store.profile = profile;
    return store.profile
  })
  console.log(store);
console.log("stop fetch data");

//case 2: call getUserBankAccount and getUserProfile parallel
// Hòa làm
// console.log("start fetch data");

// let user = await getUserPromise()
//   .then(function (user) {
//     return user
//   })
// let data = await Promise.all([
//   getUserProfilePromise(user.id),
//   getUserBankAccountPromise(user.id),
// ])

// let store = {
//   user, ...[data]
// }
// console.log(store);
// console.log("stop fetch data");

//========================================
// anh ki làm
// getUserBankAccountPromise(user.id)
//   .then(function (bankAccount) {
//     console.log(bankAccount);

//     getUserProfilePromise(user.id).then(function (profile) {
//       console.log(profile);
//       return profile;
//     });
//   });

// const callback = (result) => {
//   console.log('user data', result);
//   getUserBankAccount(result.id, (result) => {
//     console.log('bank data', result);
//   });

//   getUserProfile(result.id, (result) => {
//     console.log('user profile data', result);
//   });
// };

// getUser(callback);
// task: convert function in service.js to promise
// call services using promise and async await
// case 1: call getUserBankAccount after call getUserProfile
// case 2: call getUserBankAccount and getUserProfile parallel
// create variable to store data from services
