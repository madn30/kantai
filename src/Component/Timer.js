import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useHistory } from "react-router-dom"
export default function Timer({ setTimer, value }) {

    const history = useHistory()

    return (
        <div className="countdowntimer">
            <div className="numricvalue">
                {value}
            </div>
            <div>
                <CountdownCircleTimer
                    size={50}
                    onComplete={() => {

                        return history.push("/finish")
                    }}
                    isPlaying
                    duration={60}
                    strokeWidth={10}
                    colors={[
                        ['#004777', 0.33],
                        ['#F7B801', 0.33],
                        ['#A30000', 0.33],
                    ]}
                >
                    {({ elapsedTime }) => setTimer(elapsedTime)}
                </CountdownCircleTimer>

            </div>

        </div>
    )
}
