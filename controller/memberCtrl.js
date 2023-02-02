const { memberModel } = require("../models/member");

const createMemberData = (memberInfo) => {
  console.log(memberInfo);
  return new Promise((resolve, reject) => {
    memberModel
      .create(memberInfo)
      .then((result) => {
        if (result !== null) resolve(true);
        else {
          console.log(result);
          resolve(false);
        }
      })
      .catch((err) => {
        console.log(err);
        resolve(false);
      });
  });
};

const fetchMemberData = () => {
  return new Promise((resolve, reject) => {
    const readField = {
      name: 1,
      number: 1,
      phone: 1,
    };

    memberModel.find().then((result) => {
      resolve(result);
    });
  });
};

module.exports = { createMemberData, fetchMemberData };
