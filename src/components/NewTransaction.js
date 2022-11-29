import { useState } from "react";

import { Box, Button, TextField, Typography, styled } from "@mui/material";

const Container=styled(Box)`
    display:flex;
    flex-direction:column;
    &>h5,&>div,&>button{
        margin-top:30px
    }
`

const NewTransaction = ({setTransactions}) => {

    const [text,setText]=useState('')
    const [amount,setAmount]=useState(0)

    const addTransaction=()=>{
        const transaction={
            id: Math.floor(Math.random()*1000000),
            text:text,
            amount:+amount
        }
        setTransactions(prevState=>[transaction,...prevState])
    }


    return ( 
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            
            <TextField label="Enter Expense:" variant="outlined" onChange={(e)=>{setText(e.target.value)}} />
            <TextField label="Enter Amount:" type="number" variant="outlined" onChange={(e)=>{setAmount(e.target.value)}} />

            <Button variant="outlined" onClick={()=>{addTransaction()}} style={{padding:15}}>Add Transaction</Button>
        </Container>
     );
}
 
export default NewTransaction;