
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout.js';





function App() {
  return(
     <Layout>
        
        <Switch> 
           {/* //makes it search for starts with matches in route. */}
           
            <Route path='/' exact><AllMeetupsPage /></Route>   \* //exact says check if full path matches this path.  oor exact = true instead of just starts with *\
            <Route path='/new-meetup'><NewMeetupsPage/></Route>
            <Route path='/favorites'><FavoritesPage/></Route>
         </Switch>
  </Layout>
  );
}

export default App;
