import React from 'react'
import { useRouteMatch, Link, Switch, Route, useParams } from 'react-router-dom'

const Contact = () => {
    const { path, url} = useRouteMatch();
    return (
        <div>
            <h1>Our Branches</h1>
            
            <ul>
                <li>
                    <Link to={`${url}/accra`}>Head-Office, Accra</Link>
                </li>
                <li>
                    <Link to={`${url}/kumasi`}>Head-Branch, Kumasi</Link>
                </li>
                <li>
                    <Link to={`${url}/tardi`}>Mini-Branch, Takoradi</Link>
                </li>
                <li>
                    <Link to={`${url}/cape-coast`}>Regular-Branch, Cape-Coast</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select your branch</h3>
                </Route>
                <Route path={`${path}/:branchId`}>
                    <Branches />
                </Route>
            </Switch>

        </div>
    )
}

export default  Contact

const Branches = () =>{
    let {branchId} = useParams;
    return(
        <div>
            <h2>{branchId}</h2>
        </div>
    )
}