import { Outlet, useNavigation } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
  {isLoading && <div>Loading...</div>}

  {/* NAVBAR – centered content */}

    <div className="w-full flex justify-center bg-blue-300">
      <NavBar />
    </div>



  {/* CONTENT */}
  <div className="overflow-y-auto flex justify-center bg-blue-700">
    <main className="w-full max-w-360 px-6 py-8 flex bg-blue-950">
      <Outlet />
    </main>
  </div>

    <Footer />
  </div>

  );
}


