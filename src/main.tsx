import React from 'react'
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import TaskTable from "./App.tsx";

const client = new ApolloClient({
  uri: "https://nodejs.softwaretributario.com:7028/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TaskTable />
  </React.StrictMode>
);
