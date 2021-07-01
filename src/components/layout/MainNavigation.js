import { Link } from 'react-router-dom'
import { useContext } from 'react';
import FavoritesContext from '../../pages/store/favorites-context';

import classes from './MainNavigation.module.css'
import FavoritesPage from '../../pages/Favorites';


function MainNavigation() {
  const favctx = useContext(FavoritesContext);


    return <header className={classes.header}> 
        <div className={classes.logo}> React Meetups </div>
        <nav>
            <ul>
                <li>
                  <Link to='/'>All Meetups</Link>
                </li>
                <li>
                  <Link to='/new-meetup'>New Meetups</Link>
                </li>
                <li>
                  <Link to='/favorites'>Favorite Meetups
                  <span className={classes.badge}>{favctx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>

    </header>
}

export default MainNavigation;