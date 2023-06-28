// mengimport modul axios untuk manipulasi api
import axios from "axios";

//bikin function get/fetch yang di export/panggil/pake
export const getSiswa = (callback) => {
  axios
    .get("http://localhost:3009/")
    //pake method get untuk mengambil data di API
    .then((res) => {
      //mengirimkan respon data jika sukses
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      //nampilin error
      console.log(err);
    });
};

export const getSiswaById = (id, callback) => {
  axios
    .get(`http://localhost:3009/${id}`)
    //pake method get untuk mengambil data di API
    .then((res) => {
      //mengirimkan respon data jika sukses
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      //nampilin error
      console.log(err);
    });
};
