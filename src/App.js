import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import links from "./data/links";

export default function App() {
  const routeMaps = links.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <div style={{padding:"0 20 0 20"}}>
    <BrowserRouter>
      {/* <Container> */}
            <Switch>{routeMaps}</Switch>
      {/* </Container> */}
    </BrowserRouter>
    </div>
  );
}
