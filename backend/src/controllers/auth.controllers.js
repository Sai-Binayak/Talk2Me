// all server logics are here

// for auth we need to connect to database
export const signup = (req, res) => {
    // res.send("Signup route")
    const {fullname, email, password} = req.body
    try{
        
    }catch(error){

    }
}

export const login = (req, res) => {
    res.send("login route")
}

export const logout = (req, res) => {
    res.send("logout route")
}