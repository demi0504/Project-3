const router = require("express").Router();
// const userRoutes = require("./users");
const facilityRoutes = require("./facilities");
const sendMailRoutes = require("./sendMail.js");
const reservationRoutes = require("./reservation.js");

// Facility routes
router.use("/facilities", facilityRoutes);

// User routes
// router.use("/user", userRoutes);
const userRouter = require("./User");
router.use("/user", userRouter);

//SendMail routes
router.post("/api/contact-form", sendMailRoutes);

//Reservation routes
router.use("/reservation", reservationRoutes);

module.exports = router;
