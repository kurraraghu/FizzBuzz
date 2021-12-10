import { Joi, validate } from "express-validation";
import appConfig from "../config/config.js";

const fuzzBuzzValidation = {
  params: Joi.object().keys({
    count: Joi.number().min(appConfig.min).max(appConfig.max)
      .required()
  })
};

export default function () {
  return validate(fuzzBuzzValidation, {}, {})
};
