const { userCreateDB, userGetDB } = require("./api.repository");

const userCreate = async (name, email, password) => {
    const userCreatedDB = await userCreateDB(name, email, password);
    return userCreatedDB;
}

const getUser = async () => {
    const userCreatedDB = await userGetDB();
    return userCreatedDB; 
}

module.exports = { userCreate, getUser }