import { useState } from 'react'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    //const [user, setUser] = useState(null);

  return (

    //First way we can directly provide values to the UserContext.provider without need to call 
    // component <UserContextProvider> by using state of user here, and direclty use below code.
    // <UserContext.Provider value={{user, setUser}}>
    //     <Login />
    //     <Profile/>
    // </UserContext.Provider>


    //But we preferred this mehtod by making the component as it encapsulate the logic of user, setUser,
    // Making code more modular
    <UserContextProvider>
          <Login />
          <Profile/>
    </UserContextProvider>
  )
}

export default App



//Whole Flow or My Understanding

//1. UserContext is created as a container to hold and share values (user, setUser)(UserContext.Provider when
// passed with values provide value to userContext, think UserContext as a container)

//2.UserContextProvider:
// Initializes the user state with useState(user, setUser).
// Passes both user and setUser to the "UserContext.Provider" through the value prop.
// {children}:Renders all components wrapped inside UserContextProvider (like <Login /> and <Profile />).
// Here Login and Profile is children of the UserContextProvider as anything which is passed inside opening and closing 
//tag of the compient is taken as children in React.
// These components are now able to access user and setUser via useContext(UserContext).

