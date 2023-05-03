const jwt = require('jsonwebtoken')
const key="kghdgbkhybmbjdgbfjhmnenbvctftsadyasfagdfkjh"
async function auth(req, res, next) {

    let token = req.headers.token;
    if (token) {
        token = token.slice(1, -1);
        try {
            if (token) {
                console.log(token)
                  jwt.verify(token,key); // throws error if invalid token
    
                const user = jwt.decode(token);
                req.user = user;
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