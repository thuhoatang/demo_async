import { bankAccount, user, profile } from './data';
// convert function in service.js to promise
export function getUserPromise () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(user); 
          }, 2000);
    })
}

export function getUserProfilePromise (userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (userId === profile.userId) {
                resolve(profile)
            } else {
                reject(new Error('invalid userId'))
            }
          }, 2000);
    })
}

export  function getUserBankAccountPromise (userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (userId === bankAccount.userId) {
                resolve(bankAccount)
            } else {
                reject(new Error('invalid userId'))
            }
          }, 2000);
    })
}