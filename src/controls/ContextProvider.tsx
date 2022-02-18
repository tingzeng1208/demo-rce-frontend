import { useState, createContext, useMemo } from 'react';
import React from 'react';

const UserContext = React.createContext({}); 

const ContextProvider = (props) => {
    const [username, setUsername] = useState('');
    const [currentPage, setCurrentPage] = useState('main');
// the state that we'll be storing the username into

/* because we will be providing an object to the provider, it is better to put the value inside a useMemo so that the component will only re-render when there's a change in the value. */

const savedValue = useMemo(
   () => ({username, setUsername}),[username])


    return (
        <UserContext.Provider value={savedValue} >
            {props.children}
        </UserContext.Provider>
    );
}
export { UserContext, ContextProvider };



