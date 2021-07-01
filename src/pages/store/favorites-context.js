import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemisFavorite:(meetupId) => {}

});
//  adding functions above helps ide with autocomplete only

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);



    function addFavoriteHandler(favoriteMeetup){
            setUserFavorites((prevUserFavorites) => {
                    return prevUserFavorites.concat(favoriteMeetup)

            });

    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId );
      
       

    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemisFavorite: itemIsFavoriteHandler

    };

    return <FavoritesContext.Provider value={context}>
        {props.children}

    </FavoritesContext.Provider>
}


export default FavoritesContext;