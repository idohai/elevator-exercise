import { useSelector } from 'react-redux';
import { Grid, Container, Stack } from '@mui/material';

import ElevatorSystem from "../components/ElevatorSystem"
import CallButtonGrid from '../components/CallButtonGrid'
import FloorNumbers from '../components/FloorNumbers'



const BuildingPage = () => {

    const numOfElevators = useSelector(state => state.numOfElevators);

    const containerStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DEDEDE",
        height: '100vh'
    }
    return (
        <div style={containerStyles}>
            <Stack spacing={4}>
                <Container sx={{textAlign: 'center'}}>
                    <h1>Elevator exrecise</h1>
                </Container>
                <Container>
                    <Grid container columns={numOfElevators+2}>
                        <Grid item>
                            <FloorNumbers />
                        </Grid>
                        <ElevatorSystem />
                        <Grid item>
                            <CallButtonGrid />
                        </Grid>
                    </Grid>
                </Container>
            </Stack>
        </div>
    )
}

export default BuildingPage;