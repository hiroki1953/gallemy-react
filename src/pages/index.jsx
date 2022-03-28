import { Footer } from "./components/Footer";
import { Head } from "./components/Head";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <div className="h-screen">
      <Head />
      <Header />

      <Main />

      <Footer />
    </div>
  );
}
