import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { elevatorActions } from '../store/store';
import FormControl from '@mui/material/FormControl';

const LandingPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [numOfElevators, setNumOfElevators] = useState(0);
    const [numOfFloors, setNumOfFloors] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(elevatorActions.initialize({
            numOfElevators,
            numOfFloors
        }))
        navigate('/Building');


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Number of elevators:
                    <input type="number" value={numOfElevators} onChange={(e) => setNumOfElevators(e.target.value)} />
                </label>
                <br/>
                <label>
                    Number of floors:
                    <input type="number" value={numOfFloors} onChange={(e) => setNumOfFloors(e.target.value)} />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LandingPage;