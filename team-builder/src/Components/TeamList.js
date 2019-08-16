import React, { useState } from "react";

const TeamList = props => {
    const [member, setMember] = useState({
        id: '',
        name: '',
        email: '',
        role: '',
    })

    const changeHandler = event => {
        // const newObj = {...note}
        // newObj[event.target.name] = event.target.value;
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewTeam(newMember)
    }

    return (
            <form onSubmit={submitForm}> 
                    <label htmlFor='name'></label>
                        <input type='text' name='name' value={member.name} placeholder='Name' onChange={changeHandler} />
                    
                    <label htmlFor='email'></label>
                        <input type='text' name='email' placeholder='Email' value={member.email} onChange={changeHandler} />
                    
                    <label htmlFor='email'></label>
                        <input type='text' name='role' placeholder='Role' value={member.role} onChange={changeHandler} />

                <button type='submit'>Add Team Member</button>
            </form>
      
    );



}

export default TeamList;