import { Layout, Spin } from "antd";
import { Suspense } from "react";
import ContentComponent from "./content";
import HeaderComponent from "./header";
import SideBar from "./menu";
// import FooterComponent from "./footer";

const MainLayout = () => {
  // const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Layout style={{ height: "99.9vh" }}>
      <HeaderComponent
      // collapsed={collapsed}
      // setCollapsed={setCollapsed}
      />
      <Layout>
        <SideBar
        // collapsed={collapsed}
        />
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
            {/* <FooterComponent /> */}
          </Layout>
        </Suspense>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
