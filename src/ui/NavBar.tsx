import { useNavigate } from "react-router"
import UserName from "../features/User/UserName";

export default function NavBar(){
    const navigate = useNavigate()

    return (
        <div className="max-w-360 w-full h-16 border-b  border-gray-200">
        <div className="h-full flex items-center justify-between">
    
    {/* Left - Username */}
    <UserName />

    {/* Right - Navigation */}
    <div className="flex items-center gap-8">
      
      {/* Home */}
      <span
        onClick={() => navigate('/')}
        className="relative cursor-pointer text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-gray-900
                   after:absolute after:left-0 after:-bottom-1 after:h-0.5  after:w-0 after:bg-gray-900
                   after:transition-all after:duration-300 hover:after:w-full"
      >
        Home
      </span>

      {/* Order Page */}
      <span
        onClick={() => navigate('/products')}
        className="relative cursor-pointer text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-gray-900
                   after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-900
                   after:transition-all after:duration-300 hover:after:w-full"
      >
        Products
      </span>

    </div>
  </div>
</div>

    );
}