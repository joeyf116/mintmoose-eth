import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";

const App = () => {
  // Get the Wallet Provider
  const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<h1>Landing</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
        </Routes>
      </BaseLayout>
    </Web3ReactProvider>
  );
};

export default App;
