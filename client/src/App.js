import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/footerComponents/Footer";
import HeaderTwo from "./components/headerComponents/Header";
import HomeTwo from "./components/homeComponents/Home";
import About from "./components/aboutComponents/About";
import SupportPage from "./components/supportComponent/SupportPage";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <HeaderTwo />
        <Routes>
          <Route path="/" element={<HomeTwo />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/profiles/:profileId" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;