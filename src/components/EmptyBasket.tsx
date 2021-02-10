import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';

export const EmptyBasket = () => {
    return (
        <div className="alert">
            <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
    The Cart is Empty — <strong>Add Products To Cart!</strong>
            </Alert>
        </div>
    )
}
