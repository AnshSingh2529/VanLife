import React, { useState } from "react";
import { useLoaderData,Form } from "react-router-dom";
import { loginUser } from "../van/api";


export async function action({request}){
    const credentials = await request.formData()
    const email = credentials.get("email")
    const password = credentials.get("password")
    console.log("email :" + email , "password :" + password);
    return null;
}

export function LoginLoader ({ request }){
return new URL(request.url).searchParams.get("message");
}

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const message = useLoaderData();
    const [Status, setStatus] = useState("idle");
    const [error, setEror] = useState(null);



    function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting") 
        setEror(null);
       loginUser(loginFormData)
       .then(data => console.log(data))
       .catch(err => setEror(err))
       .finally(() => setStatus("idle"))
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>

            {message && <h2 className="red">You must Login First.</h2>}
            {error && <h2 className="red">{error.message}</h2>}

            <Form  className="login-form" method="post">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={Status === "submitting"}
                >
                  {Status === "submitting" ? "Logging in..." : "Log in"}  
                    
                </button>
            </Form>
        </div>
    )

}