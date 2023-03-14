import { React, useState, useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { elevatorActions } from '../../store/store';

import  Button  from '@mui/material/Button';

const CallButton = forwardRef((props, ref) => {
    
    const { buttonId } = props;
    const dispatch = useDispatch();
    const buttonState = useSelector(state => state.buttonsState[buttonId]);

    const [buttonColor, setButtonColor] = useState('success');
    const [buttonVariant, setButtonVariant] = useState('contained');
    const [buttonText, setButtonText] = useState('Call');
    const [isDisabled, setIsDisabled] = useState(false);
    const [callTime, setCallTime] = useState(0);

    
    useEffect( () => { //run when buttonState changes. true when elevator reached the floor, back to false 2 seconds after elevator reached the floor.
        if (buttonState) {
            setButtonColor('success');
            setButtonVariant('outlined');
            setButtonText('Arrived');
            const timeToReach = (performance.now() - callTime)/1000; //Bonus - format this number to {min. sec} and present (I'm not sure where)
            console.log(`Time to reach floor ${buttonId}: ${timeToReach}`);
        }
        else {
            setButtonVariant('contained');
            setButtonText('Call');
            setIsDisabled(false);
        }

    }, [buttonState]);

    const callElevator = () => {
        setCallTime(performance.now());
        setButtonColor('error');
        setButtonText('Waiting');
        setIsDisabled(true);
        dispatch(elevatorActions.callElevator(buttonId));
    }

    return (
        <Button
            variant={buttonVariant} color={buttonColor} onClick={callElevator}
            sx={{minWidth: 2/3, textTransform: 'none', pointerEvents: isDisabled ? "none" : "all"}}> 
            {buttonText}
        </Button>
    );
});

export default CallButton;