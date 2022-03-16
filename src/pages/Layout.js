import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Fragment } from "react";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <Container
        maxWidth={"xl"}
        sx={{ paddingTop: "9vh", paddingBottom: "20vh" }}
      >
        {/* <Box sx={{ height: "100vh" }}> */}
        <Outlet />
        {/* </Box> */}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
