const { siswa } = require("../../models");

exports.getSiswa = async (req, res) => {
  try {
    const data = await siswa.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    // res.render('pages/dashboardadmin', {data,moment:moment})
    res.send({
      status: 200,
      message: "running well",
      data: data,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getSiswaById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = [];

    if (data[0] == null) {
      const userData = await siswa.findOne({
        where: {
          id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      if (userData == undefined || userData == null) {
        return res.status(400).send({
          message: `id siswa ${id} tidak ditemukan`,
        });
      }

      console.log("USER DATA: ", userData);
      return res.status(200).send({
        message: `data id ${id}`,
        data: userData,
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({
      status: 500,
      message: "Internal server error!",
    });
  }
};

exports.postDataSiswa = async (req, res) => {
  try {
    const data = req.body;
    const save = await siswa.create(data);
    res.send(data);
  } catch (err) {
    console.error(err);
  }
};

exports.putDataSiswaById = async (req, res) => {
  try {
    const update = await siswa.update(
      {
        name: req.body.name,
        tempatLahir: req.body.tempatLahir,
        umur: req.body.umur,
        alamat: req.body.alamat,
        noHp: req.body.noHp,
      },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    );
    const panggil = await siswa.findOne({
      where: { id: req.params.id },
    });
    if (!panggil) {
      return res.status(404).send({
        message: "data tidak ditemukan",
      });
    }
    res.send({
      status: 200,
      message: "berhasil update data!",
      data: panggil,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.deleteDataSiswaById = async (req, res) => {
  try {
    const call = await siswa.findOne({
      where: { id: req.params.id },
    });
    if (!call) {
      return res.status(404).send({
        message: "data tidak ditemukan",
      });
    }

    let del = await siswa.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      message: "berhasil hapus data",
    });
  } catch (err) {
    console.error(err);
  }
};
