const jwt = require('jsonwebtoken');
const user = require('../models/user.models');
const key="kghdgbkhybmbjdgbfjhmnenbvctftsadyasfagdfkjh"
async function auth(req, res, next) {

    let token = req.headers.token;
    if (token) {
        token = token.slice(1, -1);
        try {
            if (token) {
                jwt.verify(token,key); // throws error if invalid token
                const users = jwt.decode(token);
                const newuser =await user.findOne({username:users.username})
                req.user = newuser;
                next();
            }

        } catch (err) {
            return res.status(400).send({
                error: 'Invalid token provided'
            })
        }
    } else {
        return res.status(400).send({
            error: 'No token provided'
        })
    }
}

module.exports = auth;