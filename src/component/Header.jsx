import { Button, HStack } from "@chakra-ui/react";
//import "../style/header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coin</Link>
      </Button>
    </HStack>
  );
};
export default Header;
