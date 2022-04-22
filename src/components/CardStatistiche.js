import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function OutlinedCard(props) {
  return (
    <Box mx ={5} mt={10} sx={{ maxWidth: 400 , maxHeight:400}}>
      <Card  props = {props} variant="outlined">

      <React.Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        /statistiche
      </Typography> */}
      <Typography variant="h5" component="div">
        {/* be{bull}nev{bull}o{bull}lent */}
        {props.stanza}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        disconnessioni per mese
      </Typography>
      {props.elenco_disconnessioni && Object.keys(props.elenco_disconnessioni[props.stanza]).map((mese, index) => (
      <Typography variant="body2">
      <b>{mese}</b>: {props.elenco_disconnessioni[props.stanza][mese]}
      </Typography>
      ))
      }

    </CardContent>
    <CardActions>
      {/* <Button size="small">Learn More</Button> */}
    </CardActions>
  </React.Fragment>



      </Card>
    </Box>

  );
}
