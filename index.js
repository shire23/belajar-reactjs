const express = require("express");
const app = express();
const port = 3009;
app.use(express.json());
const cors = require("cors");

const siswaRoutes = require("./src/routes/siswa");

app.use(express.json());
app.use(cors());

app.use("/", siswaRoutes);

app.listen(port, () => {
  console.log(`port ${port}`);
});
