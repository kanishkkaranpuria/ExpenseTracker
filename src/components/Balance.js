

import { Box, Typography, styled} from "@mui/material";

const BalancedText = styled(Typography)`
    font-size:25px;
    margin-bottom:20px;
`

const Balance = ({transactions}) => {

    const amount = transactions.map(transaction=>transaction.amount);
    const total =amount.reduce((amount,item)=>(amount+=item),0).toFixed(2)
    
    return ( 

        <Box>
            <BalancedText>Balance:₹{total}</BalancedText>
        </Box>

     );
}
 
export default Balance;