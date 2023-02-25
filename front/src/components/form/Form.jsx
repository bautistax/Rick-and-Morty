import React from 'react';
import styles from './Form.module.css';
import  validation  from './Validation';

export default function Form (props){
    const [userData, setuserData]=React.useState({
        username:'',
        password:'',
    });

    const [errors, setErrors]= React.useState({
        username:'',
        password:'',
    });

    function handleInputChange(e){
        setuserData({...userData,
           [e.target.name]: e.target.value
        });
        setErrors(validation({...userData,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.login(userData);
    }


    return(
    <div>
        <form className={styles.container} onSubmit={handleSubmit}>
        <label className={styles.user}>Rick and Morty App</label>
        <input 
        id='username'
        name='username'
        placeholder='Username...'
        type='text'
        value={userData.username}
        onChange={handleInputChange}
        ></input>
        <p>{errors.username}</p>

        {/* <label className={styles.user} htmlFor='password'>Password:</label> */}
        <input
         id='password'
        name='password'
        placeholder='Password'
         type='password'
         value={userData.password}
         onChange={handleInputChange}
         ></input>
         <p>{errors.password}</p>

         <button type="submit">Login</button>

        {/* <input type='submit'></input> */}

        </form>

    </div>

    )
}


