import 'reflect-metadata';
import { setupContainer } from './containers';
setupContainer()

import app from './server'
import { AddressInfo } from 'net'

const listener = app.listen(3000, () => {
    const address = listener.address() as AddressInfo
    console.log('Listening on port ' + address?.port); 
});