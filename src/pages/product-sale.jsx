import Layout from ".../../../components/organism/Layout/";
import bgLogo from "../../public/images/bg13.jpg";

export default function productSale() {
  return (
    <div>
      <Layout>
        <div className="p-5 text-center">
          <p className="font-semibold font-2 text-xl">Adidas</p>
          <div className="text-left md:text-center">
            <p>
              Adidas AG adalah sebuah perusahaan sepatu Jerman. <br />
              Perusahaan ini dinamakan atas pendirinya, Adolf Dassler,
              <br /> yang mulai memproduksi sepatu pada 1920-an di Herzogenaurach <br /> dekat Nuremberg.
            </p>
          </div>
          <div>
            <div className="mt-4 ">
              <button className="bg-emerald-500 rounded-md text-white w-[100px] h-8 hover:bg-emerald-700">
                Started
              </button>
            </div>
          </div>
        </div>
        <div className="border-[1px] mt-4 w-[100%] border-black"></div>
        <div>
          <div className="p-12 grid grid-cols-2 gap-7">
            <div>
              <img className="w-[100%]" src={bgLogo} alt="images" />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">Description</p>
              Saat hari turnamen mulai panas dan cerah, selangkah lebih maju dari panas dengan sepatu Golf adidas ZG23
              Vent ini. Menampilkan desain ZG23 kelas bulu, mereka menambahkan bagian atas jaring yang dapat bernapas
              untuk memberi Anda keunggulan kompetitif melalui hari-hari terpanas. Desain berventilasi membuat udara
              tetap mengalir dan kaki Anda tetap sejuk dan nyaman selama putaran panas. Midsole Lightstrike memberi
              kesan ultra-responsif pada sepatu ini, sedangkan pola traksi berdasarkan data dan sirip stabilitas yang
              direkayasa di bagian sol luar menghasilkan kuda-kuda yang stabil. Dibuat dengan serangkaian bahan daur
              ulang, bagian atas ini menampilkan setidaknya 50% konten daur ulang. Produk ini merupakan salah satu
              solusi kami untuk membantu mengakhiri sampah plastik.
            </div>
          </div>
          <div className="border-[1px] mt-4 w-[100%] border-black"></div>
          <div className="p-12 grid grid-cols-2 gap-7">
            <div>
              <p className="text-xl font-semibold mb-2">Description</p>
              Saat hari turnamen mulai panas dan cerah, selangkah lebih maju dari panas dengan sepatu Golf adidas ZG23
              Vent ini. Menampilkan desain ZG23 kelas bulu, mereka menambahkan bagian atas jaring yang dapat bernapas
              untuk memberi Anda keunggulan kompetitif melalui hari-hari terpanas. Desain berventilasi membuat udara
              tetap mengalir dan kaki Anda tetap sejuk dan nyaman selama putaran panas. Midsole Lightstrike memberi
              kesan ultra-responsif pada sepatu ini, sedangkan pola traksi berdasarkan data dan sirip stabilitas yang
              direkayasa di bagian sol luar menghasilkan kuda-kuda yang stabil. Dibuat dengan serangkaian bahan daur
              ulang, bagian atas ini menampilkan setidaknya 50% konten daur ulang. Produk ini merupakan salah satu
              solusi kami untuk membantu mengakhiri sampah plastik.
            </div>
            <div>
              <img className="w-[100%]" src={bgLogo} alt="images" />
            </div>
          </div>
          <div className="border-[1px] mt-4 w-[100%] border-black"></div>
        </div>
        <div className="p-12 grid grid-cols-2 gap-7">
          <div>
            <img className="w-[100%]" src={bgLogo} alt="images" />
          </div>
          <div>
            <p className="text-xl font-semibold mb-2">Description</p>
            Saat hari turnamen mulai panas dan cerah, selangkah lebih maju dari panas dengan sepatu Golf adidas ZG23
            Vent ini. Menampilkan desain ZG23 kelas bulu, mereka menambahkan bagian atas jaring yang dapat bernapas
            untuk memberi Anda keunggulan kompetitif melalui hari-hari terpanas. Desain berventilasi membuat udara tetap
            mengalir dan kaki Anda tetap sejuk dan nyaman selama putaran panas. Midsole Lightstrike memberi kesan
            ultra-responsif pada sepatu ini, sedangkan pola traksi berdasarkan data dan sirip stabilitas yang direkayasa
            di bagian sol luar menghasilkan kuda-kuda yang stabil. Dibuat dengan serangkaian bahan daur ulang, bagian
            atas ini menampilkan setidaknya 50% konten daur ulang. Produk ini merupakan salah satu solusi kami untuk
            membantu mengakhiri sampah plastik.
          </div>
        </div>
      </Layout>
    </div>
  );
}
