// import logo from './logo.svg';
import { routes, PrivateRoute, PublicRoute } from './routes';
import { Switch, Route } from 'react-router-dom';
import { Suspense } from 'react';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Suspense fallback="waiting...">
        <Switch>
          {routes.map(route => {
            return <Route {...route} />;
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
