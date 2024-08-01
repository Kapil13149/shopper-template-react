import React, {useContext, useState} from 'react';

let UserDetailsContext = React.createContext(null);
export function MensClothing() {

    const context = useContext(UserDetailsContext);
    return (
        <div>
            <h4>Mens Clothing- {context.UserName} </h4>
        </div>
    )
}
export function HomeComponent() {

    const context = useContext(UserDetailsContext);
    return (
        <div>
            <h3>Home- {context.UserName}</h3>
            <MensClothing />
        </div>
    )

}


export function ContextDemo() {
    const [userName, setUserName] = useState("Kapil Belure");
    function HandleUserChange(e) {

        setUserName(e.target.value);

    }
    return (
        <div className="container-fluid">
            <h2>Context Demo Main Component</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={HandleUserChange} /></dd>
            </dl>
            <UserDetailsContext.Provider value={{ UserName: userName }}>
                <HomeComponent />
            </UserDetailsContext.Provider>
        </div>
    )

}