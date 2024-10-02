import { Layout, Spin } from "antd";
import { Suspense } from "react";
import ContentComponent from "./content";
import FooterComponent from "./footer";
import HeaderComponent from "./header";
import SideBar from "./menu";

const MainLayout = () => {
  return (
    <Layout style={{ height: "99.9vh" }}>
      <HeaderComponent />
      <Layout>
        <SideBar />
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spin />
            </div>
          }
        >
          <Layout>
            <ContentComponent />
            <FooterComponent />
          </Layout>
        </Suspense>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
