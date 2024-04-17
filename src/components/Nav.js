import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Nav=()=>{
    const auth= localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup');
    }

    return (
    <div>
        <img alt="mob image" src="https://imgs.search.brave.com/QOF7A1mXhnFz30qYHpI52CzzP59vy8Qa9xfVcI_S674/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzgwOS83Nzcv/MjE3L2FuaW1lLW1v/Yi1wc3ljaG8tMTAw/LXNoaWdlby1rYWdl/eWFtYS1oZC13YWxs/cGFwZXItcHJldmll/dy5qcGc" className="logo" />
        { auth ? 
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>

            </ul>
             :
             <ul className="nav-ul nav-right">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
             </ul>
        }
    </div>
    )
}

export default Nav;