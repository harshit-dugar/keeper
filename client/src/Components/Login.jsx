import React from "react";

function Login(){
    return (
        <div className="">
            <h1>Login</h1>
            <form>
                <input name="username" placeholder="Username" />
                <input name="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;