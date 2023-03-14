import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Grid';
import ElevatorSystem from '../components/ElevatorSystem';
import CallButtonGrid from '../components/LayoutHelpers/CallButtonGrid';
import FloorNumbers from '../components/LayoutHelpers/FloorNumbers';


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
            <Stack>
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