import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import Charts from "./Charts"
import Timer from "./Timer"


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};
const initialJson = {
    "Reps": {
        "TimeOfMove": [1, 2, 3, 4, 5, 5, 6, 10, 12, 13, 14, 50],
        "ScoreOfMove": [60, 72, 10, 60, 70, 80, 90, 100, 90, 40, 0, 20],
    }
}
export default function Camera() {
    const [timer, setTimer] = useState(0)
    const [valueTheScore, setvalueTheScore] = useState(-1)
    const webcamRef = React.useRef(null);

    useEffect(() => {
        const index = initialJson.Reps.TimeOfMove.findIndex(element => element.toString() === timer.toFixed(0) || element.toString() === timer.toFixed(1));
        if (index < 0) return null
        else {
            setvalueTheScore(initialJson.Reps.ScoreOfMove[index])
        }

    }, [timer.toFixed(0)])

    return (
        <div >
            <Webcam
                className="webcam"
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                forceScreenshotSourceSize="true"
            />

            <Charts value={valueTheScore > -1 && valueTheScore} />
            <Timer value={valueTheScore > -1 && valueTheScore} setTimer={setTimer} />

        </div>

    )
}
