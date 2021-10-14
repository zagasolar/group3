import React from 'react'

import {Center, Button, Box,Text, View, Modal, HStack, VStack} from 'native-base'
import ChargingSummary from './ChargingSummary'

export default function ChargeBtn({bton, setBton}) {

    const [showTransaction, setShowTransaction] = React.useState(false)

    const [confirmSummary, setConfirmSummary] = React.useState(false)

    const [button, setButton] = React.useState("Start")
    function handlePress(button) {
        if (button === 'Start'){
            setButton('Stop')
            setBton(true) 
        }
        else{
            setButton('Start')
             setBton(false) 
             setConfirmSummary(true)
        }
    }


    return (
        <View>
           
                <Button size="sm" height="50" width="200" alignSelf="center"  backgroundColor= {bton ? 'red.500' : '#18E7A4' } 
                onPress={()=>{handlePress(button);
                }}
                onClick={()=> setBton(true)} >
                    
                    {button}
            <ChargingSummary showTransaction={showTransaction} setShowTransaction={setShowTransaction}
                             confirmSummary={confirmSummary} setConfirmSummary={setConfirmSummary}
            />

                </Button>


    
    </View>

    )
}



// const handlePress = (button) =>