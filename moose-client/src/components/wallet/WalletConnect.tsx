import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { NetworkChainType } from "../../types/NetworkChain.type";
import { injectedTestNetworkWalletConnector } from "./InjectedTestNetworkWalletConnector";
import { Button, Stack } from "react-bootstrap";
import WalletNetworkName from "./WalletNetworkName";
import { FaEthereum } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import "./walletConnect.css";

type WalletConnectProps = {
  handleIsConnected: (status: boolean) => void;
}

const WalletConnect = ({ handleIsConnected }: WalletConnectProps): JSX.Element => {
  const { chainId, account, activate, active } = useWeb3React<Web3Provider>();
  const [myActiveNetwork, setMyActiveNetwork] = useState<NetworkChainType>({
    id: 0,
    name: "No Network",
  });

  const onClick = () => {
    activate(injectedTestNetworkWalletConnector);
  };

  useEffect(() => {
    if (chainId) {
      const response = WalletNetworkName(chainId);
      setMyActiveNetwork(response);
      handleIsConnected(true);
    }
  }, [chainId, handleIsConnected]);

  return (
    <>
      {active && chainId && account ? (
        <Stack direction="vertical" gap={0} className="align-items-center mb-3">
          <div>
            <FaEthereum size={40} />
          </div>
          <p className="font-monospace m-0">{`${account.substring(
            0,
            5
          )}...${account.substring(account.length - 5)}`}</p>
          <p className="font-monospace m-0">
            {myActiveNetwork.name}{" "}
            <CgMediaLive className="glowing" size={10} color="green" />
          </p>
        </Stack>
      ) : (
        <Button
          variant="outline-primary font-monospace fw-bolder"
          size="lg"
          onClick={onClick}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
};

export default WalletConnect;
