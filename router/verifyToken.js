const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    const token = req.cookies.jsonwebtoken;
    if (token) {
        const user = jwt.verify(token, "secretkey");

        req.user = user;
        next();
    }
    else {
        res.send("No valid cookie-Token");
    }
}