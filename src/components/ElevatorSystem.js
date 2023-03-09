import { Button, Grid } from '@mui/material';

import Peer from './Peer'
import CallButtonGrid from './CallButtonGrid'

const ElevatorSystem = ({ numOfElevators, floors}) => {
    const peers = [...Array(numOfElevators)].map((_,i) => (
        <Grid item>
            <Peer numOfFloors={floors}/>
        </Grid>
    ));
    const buttons = [...Array(floors)].map((_,i) => (
        <Button>Floor {i}</Button>
    ));
    return (
        <Grid container columns={numOfElevators+1}>
            {peers}
            <CallButtonGrid numOfFloors={floors} />
        </Grid>
        
    )
}

export default ElevatorSystem;