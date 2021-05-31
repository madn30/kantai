import React from 'react'
let Remaining = 1

export default function Homepage({ history }) {

    return (
        <div >
            <div className="displaybg">
                <div className="layerbg" />
                <div className="counter">
                    <span>{Remaining}/5</span>
                    <span>RUNNING IN PLACE</span>
                    {Remaining === 5 ?
                        <span style={{ fontSize: "1rem", marginTop: 10 }}>
                            We are happy that you used our service 5 time please comeback tommorow :)
                       </span> :
                        <button onClick={() => {
                            Remaining++
                            history.push("/camera")
                        }}
                            className="startbutton">
                            Start
                    </button>
                    }

                </div>
            </div>
        </div >
    )
}
