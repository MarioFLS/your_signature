const joi = require('joi');
const StatusCodes = require('http-status-codes');

const requiredItemString = joi.string().not().empty().required();
const requiredItemNumber = joi.number().min(1).required();

const validateSignature = (req, res, next) => {
  const {
    userId, quantity, productId, productName, productImage, signedIn,

  } = req.body;
  const loginValidation = joi.object({
    userId: requiredItemNumber,
    quantity: requiredItemNumber,
    productId: requiredItemNumber,
    productName: requiredItemString,
    productImage: requiredItemString,
    signedIn: joi.date().not().empty().required(),
  })
    .messages({
      'any.required': 'Insira os dados corretamentos',
      'string.empty': 'Insira o nome do produto',
      'number.min': 'Insira um Id de usuário válido',
    });

  const { error } = loginValidation.validate({
    userId, quantity, productId, productName, productImage, signedIn,
  });
  const type = error?.details[0].context?.key;
  if (error) {
    if (type === 'productId') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Insira um Id de produto válido' });
    }
    if (type === 'productName') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'O nome do produto não pode estar vázio' });
    }
    if (type === 'productImage') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'A imagem do produto não pode estar vázia' });
    }
    if (type === 'quantity') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Insira uma quantidade acima de 0' });
    }
    if (type === 'signedIn') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Insira uma data válida' });
    }

    return res.status(StatusCodes.UNAUTHORIZED)
      .json({ message: error.details[0].message });
  }
  return next();
};

module.exports = { validateSignature };
