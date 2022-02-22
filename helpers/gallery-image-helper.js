var connection = require("../config/connection");

module.exports = {
  getAllMembers() {
    return new Promise(async (resolve, reject) => {
      // let members = await connection.get().collection("family-members").find().toArray();
      resolve(members)
    });
  },
};
