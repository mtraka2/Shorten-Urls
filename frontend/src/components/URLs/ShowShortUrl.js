import React from 'react';
import Card from '../UI/Card';

import classes from './ShowTinyUrl.module.css'
import Button from "../UI/Button";
import axios from "axios";

const goToLongUrl = (event,urlCode) =>{

    event.preventDefault();
    window.open(`http://localhost:5000/${urlCode}`)
};


const ShowShortUrl = (props) =>{

    const {urlCode,result} = props.result;

    return(
        <form onSubmit={(event)=>goToLongUrl(event,urlCode)}>
            <Card className={classes.result}>
                <div className={classes.detail}>
                    {result}
                    <Button
                        type="submit"
                    >
                    Go
                    </Button>
                </div>
            </Card>
        </form>
    )
};

export default ShowShortUrl;
