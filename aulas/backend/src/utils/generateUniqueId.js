const crypto = require('crypto');
// se falhar tentar module.exports = function generateUniqueId()
module.exports = function generateUniqueId(){
  return crypto.randomBytes(4).toString('HEX');
}
