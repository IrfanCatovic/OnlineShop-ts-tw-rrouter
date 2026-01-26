import { useNavigate } from "react-router"
import UserName from "../features/User/UserName";

export default function NavBar(){
    const navigate = useNavigate()

    return (
            <div className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-5xl">
                <div className="flex h-14 items-center justify-between md:h-16">

                  {/* Left - Username */}
                  <div className="shrink-0">
                    <UserName />
                  </div>

                  {/* Right - Navigation */}
                  <nav className="flex items-center gap-5 sm:gap-7 md:gap-9 lg:gap-10">
                    <span
                      onClick={() => navigate('/')}
                      className="group relative cursor-pointer text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 md:text-base"
                    >
                      Home
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full" />
                    </span>

                    <span
                      onClick={() => navigate('/products')}
                      className="group relative cursor-pointer text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 md:text-base"
                    >
                      Products
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full" />
                    </span>

                    <span
                      onClick={() => navigate('/cart')}
                      className="group relative cursor-pointer text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 md:text-base"
                    >
                      Cart
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </nav>

                </div>
              </div>
            </div>
          );
        }