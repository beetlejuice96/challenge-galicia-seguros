import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import LoginMobile from "./pages/LoginMobile";
import NoMatch from "./pages/No-match";
import { useMediaQuery, useTheme } from "@mui/material";
import constants from "./constants";
const { ROUTES } = constants;
const Routes = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {matches && (
          <Route path={ROUTES.LOGINMOBILE} element={<LoginMobile />} />
        )}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Switch>
  );
};
export default Routes;
