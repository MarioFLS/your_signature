const joi = require('joi');
const StatusCodes = require('http-status-codes');

const requiredItemString = joi.string().not().empty().required();
const requiredItemNumber = joi.number().min(1).required();

const validateSignature = (req, res, next) => {
  const loginValidation = joi.array().items(joi.object({
    productId: requiredItemNumber,
    productName: requiredItemString,
    productImage: requiredItemString,
    signedIn: joi.date().not().empty().required(),
    price: requiredItemNumber,
  })).messages({
    'any.required': 'Insira os dados corretamentos',
    'string.empty': 'Insira o nome do produto',
    'number.min': 'Insira um Id de produto válido',
  });
  const { error } = loginValidation.validate(req.body.map((item) => item));
  const type = error?.details[0].context?.key;
  const index = error?.details[0].path[0];
  if (error) {
    if (type === 'productName') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({
          message: 'O nome do produto não pode estar vázio',
          index,
        });
    }
    if (type === 'productImage') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({
          message: 'A imagem do produto não pode estar vázia',
          index,
        });
    }
    if (type === 'signedIn') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Insira uma data válida', index });
    }
    if (type === 'price') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Insira um valor válido', index });
    }

    return res.status(StatusCodes.UNAUTHORIZED)
      .json({ message: error.details[0].message, index });
  }
  return next();
};

module.exports = { validateSignature };
