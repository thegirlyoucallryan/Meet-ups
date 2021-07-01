
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';


function NewMeetupsPage(){

    const history = useHistory();

    function addMeetupHandler(meetUpData){
        fetch('https://meetup-e3c7f-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetUpData),
            headers: {
                    'Content-Type':'application/json'
            }
        }).then(()=>{
            history.replace('/');
        })
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        
    </section>

}

export default NewMeetupsPage;