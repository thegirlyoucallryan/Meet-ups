
import { useRef } from "react";


import Card from "../ui/card";
import classes from './NewMeetupForm.module.css'



function NewMeetupForm (props){
    const titleInputRef = useRef();//establishes connection
    const imgInputRef = useRef();
    const addressInputRef = useRef();
    const descriptInputRef = useRef();
    

    function submitHandler(e){
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImg = imgInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptInputRef.current.value;

        const meetUpData = {
            title: enteredTitle,
            image: enteredImg,
            address: enteredAddress,
            description: enteredDescription,
        };

       props.onAddMeetup(meetUpData)

    }
    return (<Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title' >Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef}/> 
            </div>
            <div className={classes.control}>
                <label htmlFor='image' >Meetup Image</label>
                <input type='url' required id='image' ref={imgInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address' >Address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description' >Description</label>
                <textarea id='descrtiption' required  rows='5' ref={descriptInputRef}/>
            </div>
                <div className={classes.actions}>
                <button>Add Meetup
                    </button></div>


        </form>

    </Card>)


}


export default NewMeetupForm;

//label htmlFor instead of label for in jsx to avoid js key word issues.

//ref= useRef gives access to dom input  .current property holds actual connected value  .value is value of input element. //usestate for outputting something on the screen