const { useState } = require("react");
const { Children } = require("react");
const { createContext } = require("react")

const AuthContext = createContext("");
export default AuthContext
const Authcontextprovider = ({ children }) => {

    const [isAuth, SetisAuth] = useState(false);

    const toggleAuth = (value) => {

        SetisAuth(value)
    }

    return (<AuthContext.Provider value={{ isAuth, toggleAuth }}>{children}</AuthContext.Provider>)

}
export { Authcontextprovider }