import React, { useState } from 'react'
let Remaining = 1
export default function Homepage({ history }) {
    const [remaining, setRemaining] = useState(1)
    return (
        <div >
            <div className="displaybg">
                <div className="layerbg" />
                <div className="counter">
                    <span>{Remaining}/5</span>
                    <span>RUNNING IN PLACE</span>
                    <button onClick={() => {
                        Remaining++
                        history.push("/camera")
                    }}
                        className="startbutton">
                        Start
                    </button>

                </div>
            </div>
        </div >
    )
}
