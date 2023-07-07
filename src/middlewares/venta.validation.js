import Joi from 'joi';
import { CODES_HTTP } from '../constants/global.js';

const ventaSchema = Joi.object({
  fecha_venta: Joi.date().required(),
  status_venta: Joi.string().max(45).required(),
  id_envio: Joi.number().integer().required(),
  id_pago: Joi.number().integer().required(),
});

export function validateVentaData(req, res, next) {
    const data = req.body;
  
    const validationResult = ventaSchema.validate(data);
    const { error } = validationResult;
  
    if (error) {
      return res.status(CODES_HTTP.BAD_REQUEST).json({ error: 'Datos de venta inválidos' });
    }
    next();
  }
  
