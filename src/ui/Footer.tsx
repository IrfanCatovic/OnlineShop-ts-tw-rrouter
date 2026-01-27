export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-gray-200/70 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 py-6 text-sm md:flex-row md:py-8">
          

          <div className="flex items-center gap-3 text-gray-600">
            <span className="font-medium tracking-tight text-gray-800">
              Typescript Shop
            </span>
            <span className="hidden sm:inline text-gray-400">·</span>
            <span>© {currentYear} Sva prava zadržana</span>
          </div>

         

        </div>
      </div>
    </footer>
  );
}