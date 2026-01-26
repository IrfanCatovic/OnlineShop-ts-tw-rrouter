import { Outlet, useNavigation } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

 return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-50">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
          <p className="text-lg font-medium text-gray-700">Učitavanje...</p>
        </div>
      )}

      {/* NAVBAR */}
      <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <NavBar />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="overflow-x-hidden">
        <main className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <Outlet />
        </main>
      </div>

      {/* FOOTER */}
      <footer className="w-full border-t border-gray-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
}


