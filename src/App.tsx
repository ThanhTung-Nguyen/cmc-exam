import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import router from "./routes/router";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
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
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
