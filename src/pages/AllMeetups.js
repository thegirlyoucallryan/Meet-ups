
import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from 'react';


function AllMeetupsPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);


    useEffect(()=>{
      setIsLoading(true);
      fetch('https://meetup-e3c7f-default-rtdb.firebaseio.com/meetups.json'
      ).then(response => {
       return response.json()
      }).then(data =>{
        const meetups = [];

        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup)
        }

    
        setIsLoading(false);
        setLoadedMeetups(meetups);
    
      })
    },[])

 

  if(isLoading) {
    return (<section>
      <p> Loading ...</p>
    </section>)
  }


return (
    <section>
        <h1>Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section>
)

}

export default AllMeetupsPage;


//js doesn't wait to return the div for the response from the json. 
//  async will create a promise out of the function which doesnt quailify as a react component so you need a loader.

//becareful of infinite loop from state.  useeffect hook stops it.  defines conditions on when fetch schould run and update both states.