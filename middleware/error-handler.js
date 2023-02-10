const errorHandler = (err, req, res, next) => {
  //   return res.status(500).json({ msg: err });
  return res
    .status(500)
    .json({ msg: '😯 Something went wrong. Please, try again later.' });
};

module.exports = errorHandler;
