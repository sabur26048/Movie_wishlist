const jwt = require("jsonwebtoken");
const jwtToken = (req,res,next)=>{
    const token =jwt.sign(
    { name: req.body.name, password :req.body.password },
    process.env.TOKEN_KEY,
    {
      expiresIn: "5h",
    }
  );
  req.token=token;
   next()
}


const verifyToken = (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).redirect('/')
    }
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = decoded;
    } catch (err) {
      return res.status(401).redirect('/');
    }
     next();
  };
  
module.exports={jwtToken,verifyToken}