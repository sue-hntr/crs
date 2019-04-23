const router = require("express").Router();
const bookRoutes = require("./books");
const appointmentRoutes = require("./appointments");

// Book routes
router.use("/books", bookRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;
