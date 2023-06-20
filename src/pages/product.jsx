import CardProduct from "../components/organism/CardProduct";
import Footer from "../components/organism/Footer";
import Navbar from "../components/organism/Navbar";

const data = [
  {
    id: 1,
    image: "public/images/logo2.svg",
    title: "paket suka-suka",
  },
  {
    id: 2,
    image: "public/images/logo1.svg",
    title: "Paket Internet",
  },
  {
    id: 3,
    image: "public/images/logo3.svg",
    title: "Axisnet",
  },
  {
    id: 4,
    image: "public/images/logo4.svg",
    title: " Beli Kartu perdana",
  },
];

const data1 = [
  {
    id: 1,
    image: "public/images/bg121.png",
    title: "Jaringan Xl Axiata",
    desc: "Akses internet lebih lancar untuk kebutuhan browsing,chatting,dan download kamu",
  },
  {
    id: 2,
    image: "public/images/bg122.png",
    title: "Bonus Melimpah",
    desc: "banyak bonus yang bisa kamu ambil di Axisnet App -cek Playground & Alifetimenya",
  },
  {
    id: 3,
    image: "public/images/bg124.png",
    title: "Suka-suka pilih kuotamu",
    desc: "pilih banyak kuota paket sms sampai aplikasi favoritmu",
  },
  {
    id: 4,
    image: "public/images/bg123.png",
    title: "Ngga ribet",
    desc: "dan beli pulsa,paket data hingga kartu perdana bisa secara online ",
  },
];

const data2 = [
  {
    id: 1,
    image: "public/images/1.jpg",
    title: "Warnet 24 jam",
    desc: "masa aktif 24 jam",
    price: "Rp1.300",
  },
  {
    id: 2,
    image: "public/images/1.jpg",
    title: "Bronet 24 jam",
    desc: "masa aktif 3 hari",
    price: "Rp9.500",
  },
  {
    id: 3,
    image: "public/images/1.jpg",
    title: "Unlimited",
    desc: "masa aktif 24 jam",
    price: "Rp3.999",
  },
  {
    id: 4,
    image: "public/images/1.jpg",
    title: "Owsem games",
    desc: "masa aktif 30 hari",
    price: "Rp40.900",
  },
];

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="w-full flex h-[980px] gap-10  justify-center  min-h-screen bg-[url('../../public/images/axis_banner.png')] bg-cover ">
        <div className="container mx-auto">
          <div className=" p-[70px] ">
            <p className="font-semibold gap-5 text-[40px] ">
              Sim AXIS <br />
              NOMOR BARU <br /> TANPA KARTU FISIK
              <br />
            </p>
            <p className="mb-5"> Makin Eksis dengan HP premium kamu</p>
            <button className="bg-green-500 hover:bg-green-700 text-white w-[300px] h-12 rounded-md font-semibold">
              Beli kartu perdana Axis
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 gap-5 items-center ">
        <div className=" grid grid-cols-4 gap-4">
          {data.map((product) => (
            <div key={product}>
              <CardProduct id={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
                <CardProduct.Footer>{product.price}</CardProduct.Footer>
              </CardProduct>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-200 ">
        <p className="text-center mt-5 text-[40px] font-semibold ">Kenapa harus pakai Axis?</p>
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4 p-12 content-center">
            {data1.map((item) => (
              <div key={item}>
                <img className="object-contain content-center h-28 w-76" src={item.image} />
                <p className="">{item.title}</p>
                <p className="text-gray-500 ">{item.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-center font-semibold text-[40px]">Paket Terlaris di Axis</p>
            <div className="p-3 gap-5 items-center mt-5">
              <div className=" grid grid-cols-4 gap-4 p-5 ">
                {data2.map((product) => (
                  <div key={product}>
                    <CardProduct id={product.id}>
                      <CardProduct.Header image={product.image} />
                      <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
                      <CardProduct.Footer>{product.price}</CardProduct.Footer>
                      <div className="p-6">
                        <button className="bg-green-400 hover:bg-green-700 text-white w-[250px] h-12 rounded-md font-semibold mr-4  ">
                          Beli
                        </button>
                      </div>
                    </CardProduct>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <div>
                  <div>
                    <p className="justify-end font-semibold text-[30px] mb-10 mt-5 text-center">
                      Download AXISNET App <br /> dapat bonusnya nggak abis-abis!
                    </p>
                    <button className="bg-cyan-400 hover:bg-green-700 text-white w-[300px] h-12 rounded-md font-semibold mr-3">
                      Download App
                    </button>
                    <button className="bg-gray-400 hover:bg-violet-400 text-violet-600 w-[300px] h-12 rounded-md font-semibold">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
