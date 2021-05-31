import React from 'react'
import { Link } from "react-router-dom"
export default function Finish() {

    return (
        <div className="finishcontainer">
            <div className="layerbg" />
            <div className="finish">
                <h1>Good Bye</h1>
                <h4>thank you for using our service</h4>
                <span >if you want go to main page</span>
                <Link to="/">click here</Link>
            </div>
        </div>
    )
}
