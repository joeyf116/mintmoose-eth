import { InjectedConnector } from "@web3-react/injected-connector";

export const injectedTestNetworkWalletConnector = new InjectedConnector({
  // Connector for Identifying Test Ether Networks
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
  ],
});
