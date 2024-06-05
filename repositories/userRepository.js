const db = require('../utils/connection');

class UserRepository {
    async findUserByEmail(email) {
        const query = `SELECT * FROM user WHERE email = "${email}"`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
}

module.exports = UserRepository;
