import { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { USER_DATA } from "./constants";
import path from "./routes/path";
import router from "./routes/router";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(USER_DATA)!);
    if (!userData?.token) return navigate(path.login);
  }, []);

  return (
    <Suspense>
      <Routes>
        {router.map((item) => (
          <Route key={item.path} path={item.path} element={<item.element />}>
            {item?.children?.map((children) => (
              <Route
                key={children.path}
                path={children.path}
                element={<children.element />}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
