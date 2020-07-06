import React from 'react'
import HomeComponent from '../../components/pages/home/HomeComponent'
import sinon from 'sinon'
import { jest } from '@storybook/addon-jest'
import {useAuth0, Auth0Provider} from '../../react-auth0-spa'
import PermanentDrawerLeft from '../../components/template/pagestemplate/DrawerComponent'
const auth = require('../../react-auth0-spa')

export default {
    component: HomeComponent,
    title: 'HomeComponent'
}

sinon.stub(auth, 'useAuth0').returns({name: 'avinash'})

// jest.mock('../../react-auth0-spa')
// var sandbox = sinon.createSandbox()
// const updateCoverStatus = sandbox.stub(PermanentDrawerLeft.prototype, useAuth0).returns({name: 'avinash'});


export const Default = () => {
    
    // sinon.stub(useAuth0())
    // const { user } = useAuth0.mockReturnValue({
    //     loading: true,
    //     isAuthenticated: true,
    //     user: {
    //         name: 'avinash'
    //     }
    // })
    
    return (<HomeComponent> </HomeComponent>)
}

//   // const useAuth0 = sinon.stub()