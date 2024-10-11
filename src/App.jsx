import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <main className="flex ">
        <Sidebar></Sidebar>
        <div className="flex flex-col w-full">
          <Navbar />
          <Hero />
          <Search />
        </div>
      </main>
    </>
  );
}

export default App;
