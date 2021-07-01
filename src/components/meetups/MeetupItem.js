
import classes from './MeetupItem.module.css';
import {useContext} from 'react';
import FavoritesContext from '../../pages/store/favorites-context';

import Card from '../ui/card'


function MeetupItem(props) {
    const FavCntxt = useContext(FavoritesContext);

    const itemisFavorite = FavCntxt.itemisFavorite(props.id)




    function toggleFavsHandler(){
        if(itemisFavorite){
            FavCntxt.removeFavorite(props.id);
        } else {
            FavCntxt.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address

    
            })
        }

    }



    return ( <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address> {props.address} </address>
            <p> {props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavsHandler}>{itemisFavorite ? 'Remove from Favorites': 'Add to Favorites'}</button>
        </div>
        </Card>
    </li>
    
    );
}


export default MeetupItem;