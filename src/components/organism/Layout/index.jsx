import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <div className="relative h-32 ...">
        <div className="absolute inset-x-0 bottom-0 ...">
          <Footer />
        </div>
      </div>
    </div>
  );
}
