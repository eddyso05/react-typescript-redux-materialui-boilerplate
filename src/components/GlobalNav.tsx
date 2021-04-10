import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

type NaviItem = 'home' | 'renderProps'

const GlobalNav: React.FC<{ activeItem: NaviItem }> = ({ activeItem }) => {

    const dispatch = useDispatch();

    const change_route = (route:string) => {
        dispatch(push('/'+ route))
    }

    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/home" onClick={() => change_route('home')}>Home</Link>
                    </li>
                    <li>
                        <Link to="/overview" onClick={() => change_route('overview')}>Overview</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    )
}

export default GlobalNav