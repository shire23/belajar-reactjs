const express = require("express");
const router = express.Router();

const siswaControllers = require("../controller/siswa");

router.get("/", siswaControllers.getSiswa);
router.get("/:id", siswaControllers.getSiswaById);
router.post("/post", siswaControllers.postDataSiswa);
router.put("/put/:id", siswaControllers.putDataSiswaById);
router.delete("/delete/:id", siswaControllers.deleteDataSiswaById);

module.exports = router;
