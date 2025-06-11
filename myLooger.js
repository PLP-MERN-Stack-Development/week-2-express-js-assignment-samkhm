const myLogger = (req, res, next) =>{
    req.requestTime = Date.now();
    console.log(`${req.method} ${req.url} ${req.requestTime}`);
    next();

};

module.exports = myLogger;