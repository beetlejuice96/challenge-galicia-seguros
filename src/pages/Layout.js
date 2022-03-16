import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Fragment } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <Container maxWidth={"xl"}>
        <Box sx={{ height: "100vh" }}>
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
