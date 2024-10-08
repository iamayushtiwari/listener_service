
const { _auth_module } = require("@src/v1/utils/constants/messages");
const { getDatabaseConnection } = require("../middlewares/db_pool");

async function getAssoicatedModel(dbName) {
    const tenantDB = getDatabaseConnection(dbName)


    // Return Collection Instance
    return {
        tenantDB,
    }
}

module.exports = {
    getAssoicatedModel
}
