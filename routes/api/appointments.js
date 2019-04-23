const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

// Matches with "/api/appointments"
router.route("/")
  .get(appointmentsController.findAll)
  // .post(appointmentsController.create);

  router.route('/')
  .post((req,res)=>{
    console.log('hit route');
    appointmentsController.create
  })


// router.route("/saved")
//   .get(appointmentController.findAll)

// Matches with "/api/appointments/:id"
router
  .route("/:id")
  .delete(appointmentsController.remove);

module.exports = router;
