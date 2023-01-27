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
        setErrors(validation)({...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.login(userData);
    }


    return(
    <div className={styles.forms}>
        <form onSubmit={handleSubmit}>
        <label htmlFor='username'>username:</label>
        <input 
        id='username'
        name='username'
        placeholder='Escribe tu Usuario...'
        type='text'
        value={userData.username}
        onChange={handleInputChange}
        ></input>
        <p>{errors.username}</p>

        <label htmlFor='password'>password:</label>
        <input
        name='password'
         id='password'
         type='password'
         value={userData.password}
         onChange={handleInputChange}
         ></input>
         <p>{errors.password}</p>

        <input type='submit'></input>

        </form>

    </div>

    )
}