const router = require("express").Router();
const industryRoutes = require("./industry.routes");
const testRoutes = require("./test.routes");

module.exports = router;

router.use("/api/industry", industryRoutes);
router.use("/api/test", testRoutes);
