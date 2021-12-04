import MooseLogo from "../../assets/MooseLogo.svg";
import { Container, Row, Col, Image } from "react-bootstrap";
import WalletConnect from "../wallet/WalletConnect";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { Web3Provider } from "@ethersproject/providers";

const LandingCover = (): JSX.Element => {
  const { active } = useWeb3React<Web3Provider>();
  const [connected, setConnected] = useState<boolean>(active);

  const handleIsConnected = (connected: boolean) => {
    if (connected) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  };

  return (
    <Container fluid className="bg-dark m-0 text-light p-3">
      {connected ? <WalletConnect handleIsConnected={handleIsConnected} /> : null}
      <Row xs={12} className="mb-0">
        <h1 className="font-monospace text-center">
          Create, Collect, and Explore Digital Assets
        </h1>
      </Row>
      <Row className="text-center">
        <Col xs={12} className="mt-0">
          <Image src={MooseLogo} width={300} height={300} alt="Moose Logo" />
        </Col>
        <Col xs={12}>
          {!connected ? <WalletConnect handleIsConnected={handleIsConnected} /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default LandingCover;
