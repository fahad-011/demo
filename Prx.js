import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import ButtonStack from "./ButtonStack";
import ProxyTable from "./ProxyTable";
import ItemsDrawer from "./../NavigationDrawer/ItemsDrawer";
import AddProxy from "./AddProxy";

const Proxy = () => {
  // Example data for the table
  const [proxyData, setProxyData] = useState([
    {
      id: 1,
      host: "192.168.0.1",
      port: 1000,
      login: "ProxyLogin",
      password: "ProxyPassword",
      type: "http",
      version: "ipv4",
      response: "-",
      status: "bad",
    },
    {
      id: 2,
      host: "121.56.78.90",
      port: 5678,
      login: "ProxyLogin",
      password: "ProxyPassword",
      type: "https",
      version: "ipv6",
      response: "-",
      status: "bad",
    },
    // Add more proxy data as needed
  ]);

  const addProxy = (newProxy) => {
    // Generate an ID for the new proxy
    newProxy.id = proxyData.length + 1;
    // Update the proxy data state with the new proxy
    setProxyData([...proxyData, newProxy]);
  };

  return (
    <>
      <ItemsDrawer />
      <Container
        maxWidth="lg"
        sx={{
          marginLeft: { xs: 0, sm: "260px" },
          marginRight: "auto",
          paddingTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box display="grid" gap={2} width="100%">
          <ButtonStack />
          <ProxyTable proxyData={proxyData} />
          <AddProxy addProxy={addProxy} />
        </Box>
      </Container>
    </>
  );
};

export default Proxy;
