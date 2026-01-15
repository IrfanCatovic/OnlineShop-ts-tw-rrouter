import { useNavigation } from "react-router";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (<div>
      {isLoading && <div>Loading... </div>}
    </div>
  );
}


