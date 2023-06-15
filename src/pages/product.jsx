import CardProduct from "../components/organism/CardProduct";
import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";

const data = [
  {
    id: 1,
    image: "public/images/bg3.jpg",
    title: "Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "150.000",
  },
  {
    id: 2,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "340.000",
  },
  {
    id: 3,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "200.000",
  },
  {
    id: 4,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "230.000",
  },
  {
    id: 5,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "600.000",
  },
  {
    id: 6,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "670.000",
  },
  {
    id: 7,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "560.000",
  },
  {
    id: 8,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "450.000",
  },
  {
    id: 9,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "280.000",
  },
  {
    id: 10,
    image: "public/images/bg3.jpg",
    title: " Keyboard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
    price: "280.000",
  },
];

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="grid p-6 grid-cols-5 gap-2 min-h-screen">
        <CardProduct>
          <CardProduct.Header image="public/images/bg3.jpg" />
          <CardProduct.Body title="Keyboard">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio
            voluptatem repellat
          </CardProduct.Body>
          <CardProduct.Footer></CardProduct.Footer>
        </CardProduct>
        {data && data.length > 0
          ? data.map((item, index) => (
              <div key={index}>
                <CardProduct id={item.id}>
                  <CardProduct.Header image={item.image} />
                  <CardProduct.Body title={item.title}>{item.desc}</CardProduct.Body>
                  <CardProduct.Footer>{item.price}</CardProduct.Footer>
                </CardProduct>
              </div>
            ))
          : null}
      </div>
      <Footer />
    </>
  );
}
