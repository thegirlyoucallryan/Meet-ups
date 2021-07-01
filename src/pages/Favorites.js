
import {useContext} from 'react';
import FavoritesContext from './store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    const favCnttxt = useContext(FavoritesContext);

    let content;

    if(favCnttxt.totalFavorites === 0){
        content = <p>You have no favorites yet.</p>
    } else{
        content = <MeetupList meetups={favCnttxt.favorites}/>
    }



    return( 
    <section>
        <h1>My Favorites</h1>
        {content}
        
    </section>
)

}

export default FavoritesPage;