export default function Footer() {
  return (
    <div>
      <div className="p-10 flex justify-center">
        <div>
          <div>
            <p className="font-semibold text-[20px] ">
              Cek & Beli Kuota Internet
              <br />
            </p>
            <p className=" text-[15px]  font-semibold mb-3 text-gray-500 ">
              kamu dapat melakukan pengecekkan paket
              <br />
              kuota Internet AXIS kamu hingga beli paket
              <br />
              kuota data internet di aplikasi AXISNet
            </p>
            <button className="bg-cyan-400 hover:bg-green-700 text-white w-[300px] h-12 rounded-md font-semibold mr-3">
              Download App
            </button>
          </div>
          <div className="text-center font-semibold text-[18px] mb-3 pt-5">
            <p>
              Jelajahi
              <br />
              AXISNet App
              <br />
              XL Center
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-black grid grid-cols"></div>
      <p className="m-3 text-center">© 2023 Shinta Ramadhani Efendi</p>
    </div>
  );
}
