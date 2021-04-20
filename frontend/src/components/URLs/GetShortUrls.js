import React, {useState} from 'react';
import axios from 'axios';

import Card from '../UI/Card';
import Button from "../UI/Button";
import classes from './GetShortUrls.module.css';

const GetURLs = (props) =>{
    const [enteredUrl,setEnteredUrl] = useState('');

    const getShortURLSHandler = (event) =>{

        event.preventDefault();

        axios.post(`http://localhost:5000/api/url/shorten`,
            JSON.stringify({longUrl:enteredUrl}),
            {
                headers:{
                    "Content-Type":"application/json"
                },
            }).then((res)=>{
                console.log(res);
                setEnteredUrl('')
                props.onGetShortUrl(res.data.shortUrl,res.data.urlCode)
        });
    };

    const urlChangeHandler = (event) =>{
        setEnteredUrl(event.target.value)
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={getShortURLSHandler}>
                <label htmlFor="yourURL">Your URL</label>
                <input id="yourURl" type="text" onChange={urlChangeHandler}/>
                <Button type="submit">Get shortened URL</Button>
            </form>
        </Card>
    );
};

export default GetURLs;
