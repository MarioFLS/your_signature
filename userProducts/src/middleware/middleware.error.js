const Error = (err, _req, res, _next) => {
  const { error } = err;
  if (error) {
    return res.status(error.code).json({ message: error.message });
  }
  return res.status(500).json({
    message:
      'Tivemos um erro Interno, aguarde um tempo e recarregue a página!',
    error_message: err._message,
  });
};

module.exports = { Error };
