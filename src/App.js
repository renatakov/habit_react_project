import { routes, PrivateRoute, PublicRoute } from './routes';
import { Switch } from 'react-router-dom';
import { Suspense } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback="...">
        <Switch>
          {routes.map(item => {
            // console.log(item);
            return item.private ? (
              <PrivateRoute {...item} />
            ) : (
              <PublicRoute restricted={item.restricted} {...item} />
            );
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
