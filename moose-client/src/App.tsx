import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { Routes, Route } from "react-router-dom";
import LandingCover from "./components/landing/LandingCover";
import BaseLayout from "./layout/BaseLayout";

const App = () => {
  const { active } = useWeb3React<Web3Provider>();
  // Get the Wallet Provider
    // Get the Wallet Provider
    const getLibrary = (provider: any): Web3Provider => {
      const library = new Web3Provider(provider);
      library.pollingInterval = 12000;
      return library;
    };

  // useEffect(() => {
  //   // alchemyStuff(process.env.ALCHEMY_API_KEY)
  // }, [])

  console.log(active)

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<LandingCover />} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
        </Routes>
      </BaseLayout>
    </Web3ReactProvider>
  );
};

export default App;
