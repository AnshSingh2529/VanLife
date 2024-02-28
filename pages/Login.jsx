import React, { useState } from "react";

import { 
    useLoaderData,
    Form, 
    useNavigate, 
    redirect, 
    useActionData 
} from "react-router-dom";

import { loginUser } from "../van/api";


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}


export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
   
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true);
        return redirect('/host');

    } catch (error) {
        return error.message;
    }


}

export default function Login() {
    const [status, setStatus] = useState("idle")
    const message = useLoaderData()
    const navigate = useNavigate()
    const errorMessage = useActionData();

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => {
               navigate('/host', {replace:true})
            })
    }

   

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form 
            method="post" 
            className="login-form"
            replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={status === "submitting"}
                >
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}