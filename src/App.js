import "devextreme/dist/css/dx.common.css";
import "./themes/generated/theme.base.css";
import "./themes/generated/theme.additional.css";
import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./dx-styles.scss";
import LoadPanel from "devextreme-react/load-panel";
import { NavigationProvider } from "./contexts/navigation";
import { AuthProvider, useAuth } from "./contexts/auth";
import { useScreenSizeClass } from "./utils/media-query";
import Content from "./Content";
import NotAuthenticatedContent from "./NotAuthenticatedContent";
import { getToken, isAuthenticated, validateToken } from "./api/auth";

function App() {
  const { user, loading, valid } = useAuth();

  useEffect(() => {
    async function valid() {
      await validateToken(getToken());
    }
    valid();
  }, []);
  if (loading) {
    return <LoadPanel visible={true} />;
  }

  if (isAuthenticated() && valid) {
    return <Content />;
  }

  return <NotAuthenticatedContent />;
}

export default function () {
  const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
          <div className={`app ${screenSizeClass}`}>
            <App />
          </div>
        </NavigationProvider>
      </AuthProvider>
    </Router>
  );
}
