import axios from "axios";
// mengimport modul axios untuk manipulasi API

// bikin function get/fetch yang akan diexport/panggil/pake
export const getProduct = (callback) => {
  axios
    //   pake method get buat ngambil data API
    .get("https://fakestoreapi.com/products")
    //mengirim respon data jika sukses
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      // nampilin error kalo tidak benar
      console.log(err);
    });
};
