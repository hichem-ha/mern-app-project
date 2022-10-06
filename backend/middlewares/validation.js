const { body, validationResult } = require("express-validator");


exports.Validationregister = [
    body("firstname", "please add a valid firstname").not().isEmpty(),
    body("lastname", "please add a valid lasttname").not().isEmpty(),
  body("email", "please add a valid email").isEmail().normalizeEmail(),
  // body("birthday", "please select your birthday ").not().isEmpty(),
  body("password", "at least 6 caractes").isLength({ min: 6 }),
  body("gender", "please select your gender ").not().isEmpty(),
];


exports.Validationlogin = [
  body("email", "please add a valid email").isEmail(),
  body("password", "at least 6 caractes").not().isEmpty(),
];
exports.Validationcommunity =[
  body("name", "please add a name").not().isEmpty(),
  body("description", "please add a description").not().isEmpty(),

]
exports.Validationpost =[
  body("title", "please add a title").not().isEmpty(),
  body("body", "please add a body").not().isEmpty(),

]
exports.Validationcomment =[
  body("textComment", "please add a textComment").not().isEmpty(),

]


exports.Validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};