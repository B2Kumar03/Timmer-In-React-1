import { useState, useEffect } from "react";

function Timmer() {
    const [count, setCount] = useState(0)  //it is basically declare for handle count of second
    const [reset, setReset] = useState(0);  //it is basically declare for handle reset value of count
    const [intervalId, setInsetvalId] = useState(0)  //it is basically declare for handle reset and puse functionality of application it store the value of `setInterval`  id which return
    const [hour, setHour] = useState(0)   //it is basically handle hour input time and countDown decrease time
    const [minute, setMiniute] = useState(0)//it is basically handle minute input time and countDown decrease time
    const [second, setSecond] = useState(0)//it is basically handle second input time and countDown decrease time
    const [puse, setPuse] = useState(false)  //is is basically handle toggle of puse button
    const [start1, setStart] = useState(0) //it is handle use iffect
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if(count==0){
            document.title = `Timmer`
        }
        else{
            document.title = `${hour}h ${minute}m ${second}s `
        }
         //title change of application
    })

    function handleHour(event) {   //it method when user input on `hour` input box it handle using this method
        let value = Number(event.target.value);
        setHour(value)


    }
    function handleMiniute(event) {    //it method when user input on `minute` input box it handle using this method
        let value1 = Number(event.target.value);
        setMiniute(value1)

    }
    function handleSecond(event) {//it method when user input on `second` input box it handle using this method
        let value1 = Number(event.target.value);
        setSecond(value1)
    }

    useEffect(() => {      //it `useEffect` handle all api request of setInterval ......
        var totTalSecond = (hour * 3600) + (minute * 60) + second
        setReset(totTalSecond)
        if (totTalSecond > 0) {
            setPuse(!puse)
        }
        else if (totTalSecond == 0) {
            return
        }
        setCount(totTalSecond)

        function countDown() {
            let h = Math.floor(totTalSecond / 3600);
            let m = Math.floor((totTalSecond % 3600) / 60);
            let s = totTalSecond % 60;
            setHour(h)                              //this method always invoke afeter 1 sec by setinterval api call
            setMiniute(m)
            setSecond(s)
            totTalSecond = totTalSecond - 1
            setCount(totTalSecond)
        }

        const timer = setInterval(() => {
            if (totTalSecond < 0) {
                setPuse(false)
                clearInterval(timer)
                alert("Time's up!")

            } else {
                countDown();
            }
        }, 1000);
        setInsetvalId(timer)

    }, [start1])


    function puseTimmer() {
        setPuse(!puse)
        clearInterval(intervalId)
    }
    function handleReset() {
        var totTalSecond = reset
        if (reset == 0 || !puse) {
            return
        }
        setPuse(!puse)
        clearInterval(intervalId)
        let h = Math.floor(totTalSecond / 3600);
        let m = Math.floor((totTalSecond % 3600) / 60);
        let s = totTalSecond % 60;
        setHour(h)
        setMiniute(m)
        setSecond(s)
    }



    function hanleClick() {
        setStart(start1 + 1)
    }







    return <>

        <div className="timmerComponent" >
            <input type="text" onChange={handleHour} value={hour > 0 ? hour : ""} placeholder={hour == 0 ? hour : ""} /><label htmlFor="">H</label>
            <input type="text" onChange={handleMiniute} value={minute > 0 ? minute : ""} placeholder={minute == 0 ? minute : ""} /><label htmlFor="">M</label>
            <input type="text" onChange={handleSecond} value={second > 0 ? second : ""} placeholder={second == 0 ? second : ""} /><label htmlFor="">S</label>
        </div>
        <div>
            <button onClick={puse ? puseTimmer : hanleClick} >{puse ? "Puse" : "Start"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </>


}

export default Timmer;