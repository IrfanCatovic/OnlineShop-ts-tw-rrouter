import { Outlet, useNavigation } from "react-router";
import Menu from "./Menu";
import Footer from "./Footer";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (<div>
      {isLoading && <div>Loading... </div>}

      <Menu />

      <Outlet />

      <Footer />
    </div>
  );
}


