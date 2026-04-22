
const errorMiddleware = (err, req, res, next) => {
  console.log("Error trapped!");

  res.status(500).send("Something went wrong");

};

module.exports = errorMiddleware;
