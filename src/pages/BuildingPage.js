import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Grid';
import ElevatorSystem from '../components/ElevatorSystem';
import CallButtonGrid from '../components/CallButtonGrid';
import FloorNumbers from '../components/FloorNumbers';


const BuildingPage = () => {

    const containerStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DEDEDE",
        minHeight: '100vh'
    };
    return (
        <div style={containerStyles}>
            <Stack spacing={4}>
                <h1>Elevator exercise</h1>
                <Grid container>
                    <Grid item>
                        <FloorNumbers />
                    </Grid>
                    <ElevatorSystem />
                    <Grid item>
                        <CallButtonGrid />
                    </Grid>
                </Grid>
            </Stack>
        </div>
    );
}

export default BuildingPage;