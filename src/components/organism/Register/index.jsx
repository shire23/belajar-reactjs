import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atoms/Button";

export default function Register() {
  return (
    <form action="">
      <InputForm label="Nomor XL/Axis" name="nomor" type="nomor" placeholder="0817xxxxxxxx" />
      <InputForm label="NIK" name="NIK" type="NIK" placeholder="Masukkan Nomor Induk Kependudukan " />
      <InputForm label="Nomor KK" type="nomor" name="nomor" placeholder="Masukkan Nomor KK" />
      <p>Masukkan kode OTP yang telah dikirim melalui sms (berlaku 5 menit)</p>
      <Button color="bg-violet-500">Dapatkan Kode</Button>
      <div className="mt-5">
        <p className="mb-4">__ __ __ __ __ __</p>
      </div>
      <p>
        Tidak Menerima OTP?<a href="Kirim Ulang"> kirim ulang</a>
      </p>
      <Button color="bg-violet-500">DAFTAR</Button>
    </form>
  );
}
