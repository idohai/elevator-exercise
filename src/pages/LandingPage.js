import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { elevatorActions } from '../store/store';
import {TextField, Button, Stack, Container} from '@mui/material'


const LandingPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [numOfElevators, setNumOfElevators] = useState(5);
    const [numOfFloors, setNumOfFloors] = useState(10);

    
    const formStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(elevatorActions.initialize({
            numOfElevators,
            numOfFloors
        }))
        navigate('/Building');
    }
    
    return (
        <div>
            <Container sx={{ mt: 15, mb: 5 }}>
                <h1>Elevators</h1>
                <h3>Select the attributes of the elevator system</h3>
            </Container>
            <form style={formStyle} onSubmit={submitHandler}>
                <Stack spacing={2}>
                    <TextField
                        id="elevators"
                        label="Number of Elevators"
                        type="number"
                        value={numOfElevators}
                        onChange={(e) => setNumOfElevators(e.target.value)}
                    />

                    <TextField 
                        id="floors"
                        label="Number of Floors"
                        type="number"
                        value={numOfFloors}
                        onChange={(e) => setNumOfFloors(e.target.value)}
                    />

                    <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    >
                        Submit
                    </Button>
                </Stack>
                
            </form>
        </div>
    )
}

export default LandingPage;
