import './App.css';
import React from "react";
import { Switch, Route } from 'react-router-dom';

const App = ({routes}) => {
  return (
      <React.Fragment>
          <Switch>
              {routes.map(
                  (route, index) =>
                      route.isPublic ? (
                          <Route
                              key={index}
                              exact={route.exact}
                              path={route.path}
                              component={route.component}
                          />
                      ) : null
              )};
          </Switch>
      </React.Fragment>
  );
}

export default App;
