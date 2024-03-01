import React from "react";
import { 
    Form, 
    redirect, 
    useActionData,
    useNavigation 
} from "react-router-dom";

import { loginUser } from "../van/api";


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}


export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get('redirectTo') || "/host"

    try {
         await loginUser({ email, password })
        localStorage.setItem("loggedin", true);
        return redirect(pathname);

    } catch (error) {
        return error.message;
    }

}

export default function Login() {
    const errorMessage = useActionData();
    const currentNavigation = useNavigation();      //it gives us the object that gives the information about the current navigation status.(whether it is submitting or Laoding.. status) 

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
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
                    disabled={currentNavigation.state === "submitting"}
                >
                    {currentNavigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}