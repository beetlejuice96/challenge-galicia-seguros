import LoginMobileComponent from "../components/login/loginMobileComponent";
import { Container } from "@mui/material";

const LoginMobile = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <LoginMobileComponent></LoginMobileComponent>
    </Container>
  );
};

export default LoginMobile;
