const UserRepository = require('../repositories/userRepository');
const userRepository = new UserRepository();
const { sign, verify, refresh, refreshVerify } = require('../utils/jwt');
const dotenv = require('dotenv');
import md5 from 'md5';

dotenv.config();

class UserService {

    async login(userData) {
        try {
            const {email,password} = userData;
            const exUser = await userRepository.findUserByEmail(email);
            let salt = exUser[0]['salt'];
            let hash = md5(salt + password);
            if(hash == exUser[0]['password']){
                
                const payload = { email: exUser[0]['email'] };
                
                const token = sign(
                    payload
                );
                    
                return ({
                    ok: 1,
                    message: "Authorize success",
                    user: exUser,
                    token: token,
                  });
            }
        } catch(error){
            throw error;
        }
    }
}
module.exports = UserService;