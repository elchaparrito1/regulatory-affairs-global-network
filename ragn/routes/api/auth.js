const router = require("express").Router();
const authController = require('../../controllers/authController');

router.route("/customer-signup")
  .post(authController.customerSignup)

router.route("/consultant-signup")
  .post(authController.consultantSignup)

router.route("/customer-login")
  .post(authController.customerLogin)

router.route("/consultant-login")
  .post(authController.consultantLogin)

router.route("/session")
  .post(authController.session)

router.route("/logout")
  .post(authController.logout)

module.exports = router;