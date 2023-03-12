import { React, useState, useEffect, forwardRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { elevatorActions } from '../store/store'


const CallButton = forwardRef((props, ref) => {
    
    const { buttonId } = props;
    const dispatch = useDispatch();
    const buttonState = useSelector(state => state.buttonsState[buttonId])

    const [buttonColor, setButtonColor] = useState('success');
    const [buttonVariant, setButtonVariant] = useState('contained');
    const [buttonText, setButtonText] = useState('Call');
    const [isDisabled, setIsDisabled] = useState(false);
    
    useEffect( () => {
        if (buttonState) {
            setButtonColor('success');
            setButtonVariant('outlined');
            setButtonText('Arrived')
        }
        else {
            setButtonVariant('contained');
            setButtonText('Call');
            setIsDisabled(false);
        }

    }, [buttonState]);
    const callElevator = () => {
        setButtonColor('error');
        setButtonText('Waiting');
        setIsDisabled(true);
        dispatch(elevatorActions.callElevator(buttonId))
    }

    return (
        <Button
            variant={buttonVariant} color={buttonColor} onClick={callElevator}
            sx={{minWidth: 2/3, textTransform: 'none', pointerEvents: isDisabled ? "none" : "all"}}> 
            {buttonText}
        </Button>
    )
});

export default CallButton;