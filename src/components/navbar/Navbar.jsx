
import { useContext } from "react"
import AuthContext from "../../authcontextprovider";
import axios from "axios"
import { useState } from "react";
import Loginstatus from "./home/loginstatus";
function Navbar()
{

    let [obj,setobj] = useState({});
     let {isAuth,toggleAuth} = useContext(AuthContext);
     console.log(isAuth);
     let [Token,settoken] = useState("")

     const Login = ()=>{

        console.log(obj)
           
        axios.post("https://reqres.in/api/login",{...obj}).then((res)=>{

               console.log(res.data);
               if(res.data.token)
               {
                settoken(res.data.token)
                  toggleAuth(true)
               }
        })
        .catch((err)=>{
            console.log(err);
            alert("something went wrong")
        })
        .finally(()=>{

        })

     }
     const changehandle =(target)=>{
            
        let {name,value} = target;
        setobj({...obj,[name]:value})
           
     }

    return (<div><div style={{border:"1px solid red",width:"100%",height:"50px",display:"flex",justifyContent:"space-between",padding:"0px 80px",boxSizing:"border-box",alignItems:"center"}}>
          <div>Home</div>
         <div >{!isAuth?"Login":"Logout"}</div>
         
        
    </div>
    <div>{isAuth?<Loginstatus Token={Token} />:<><input type="text" placeholder="email" name="email" onChange={(e)=>{changehandle(e.target)}}/>
             <input type="text" placeholder="password" name="password" onChange={(e)=>{changehandle(e.target)}}/>
             <input type="submit" onClick={Login} /></>}
             
         </div>

    </div>)
}
export default Navbar