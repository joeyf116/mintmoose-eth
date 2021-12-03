import { NetworkChainType } from "../../types/NetworkChain.type";

const WalletNetworkName = (id: number): NetworkChainType => {
  switch (id) {
    case 1:
      return { id: id, name: "Mainnet" };
    case 3:
      return { id: 3, name: "Ropsten" };
    case 4:
      return { id: 4, name: "Rinkeby" };
    case 5:
      return { id: 5, name: "Goerli" };
    case 42:
      return { id: 42, name: "Kovan" };
    default:
      return { id: id, name: "Unknown Network" };
  }
};

export default WalletNetworkName;
