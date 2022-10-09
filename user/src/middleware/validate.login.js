const joi = require('joi');
const StatusCodes = require('http-status-codes');

const requiredItemString = joi.string().not().empty().required();

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const loginValidation = joi.object({
    email: requiredItemString,
    password: requiredItemString,
  })
    .messages({
      'any.required': 'Insira seus dados corretamente',
      'string.empty': 'Preencha corretamente o email e senha',
      'number.base': 'Insira um Saldo Válido',
    });

  const { error } = loginValidation.validate({ email, password });
  if (error) {
    return res.status(StatusCodes.UNAUTHORIZED)
      .json({ message: error.details[0].message });
  }
  return next();
};

export default validateLogin;
