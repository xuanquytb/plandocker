import React from "react";
import Header from "./HeaderV2";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";
import FooterTag from "./FooterTag/FooterTag";

const DefaultLayout = ({
  children,
  isHeader = true,
  isFooter = true,
  isNav = true,
  isFooterTag = true,
}) => {
  return (
    <div className="roll" style={{ width: "100vw", height: "100vh" }}>
      {isHeader && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header />
        </div>
      )}

      {isNav ? (
        <div
          style={{ background: "#fff", minHeight: "80vh", margin: "0 100px" }}
        >
          <div className="container grid wide">
            <NavBar />
            {children}
          </div>
        </div>
      ) : (
        <div style={{ background: "#fff", minHeight: "80vh" }}>
          <div className="container grid wide">{children}</div>
        </div>
      )}

      {isFooterTag && <FooterTag />}

      {isFooter && <Footer />}
    </div>
  );
};

export default DefaultLayout;
