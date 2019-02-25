const bcrypt = require("bcryptjs");
const encryptObj = {
    salt:10,
    generateHash(plainPassword){
        var saltValue = bcrypt.genSaltSync(this.salt);
        var hash = bcrypt.hashSync(plainPassword, saltValue);
        return hash;
    },
    compareHash(plainPassword, hashPassword){
        return bcrypt.compareSync(plainPassword, hashPassword);
    }
}
module.exports = encryptObj;