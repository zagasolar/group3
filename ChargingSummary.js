import React, {useState}from "react"

import {  
    Button,
    Modal,
    VStack,
    HStack,
    Text,
    Center, } from "native-base"

export default function ChargingSummary ({showTransaction, setShowTransaction, confirmSummary, setConfirmSummary }) {

    return (
<>
        <Modal isOpen={confirmSummary} onClose={() => setConfirmSummary(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Confirm </Modal.Header>
          <Modal.Body>
            <Text> Do you want to continue payment </Text>
          </Modal.Body>
          <Modal.Footer>
          <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setConfirmSummary(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowTransaction(true)
                }}
              >
                Continue
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>



        <Modal isOpen={showTransaction} onClose={() => setShowTransaction(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total power</Text>
                <Text color="blueGray.400">20 kWh</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total Time</Text>
                <Text color="blueGray.400">30 min</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total Amount</Text>
                <Text color="green.500">150 Rs.</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowTransaction(false)
                setConfirmSummary(false)
              }}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      </>
    )
}

