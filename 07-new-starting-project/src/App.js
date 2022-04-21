import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return <Layout>
    <Switch>
      <Route path="/" exact>
        <AllMeetups/>
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage/>
      </Route>
      <Route path="/favorites">
        <Favorites/>
      </Route>
    </Switch>
  </Layout>;
}

export default App;
