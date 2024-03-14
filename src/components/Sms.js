import React, { useState } from "react";
import { supabase } from "../supabase/supabase.config"
import "./__styles__/index.css";



function Sms() {

    const[phone, setPhone] = useState("");
    const[otp, setOtp] = useState("");
    const[loading, setLoading] = useState(false);


    async function sendOtp() {
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithOtp({
            phone,
        });
        console.log({ data });

        if (error) {
            alert(error.message);
            setLoading(false);
        } else{
            console.log('OTP sent successfully');
        }
    }

    async function verifyOtp() {
        setLoading(true);
        const { data: { session }, error } = await supabase.auth.verifyOtp({
            phone,
            token: otp,
            type: "sms",
        });

        if (error)  {
            alert.alert(error.message);
            setLoading(false);
        } else {
            console.log('OTP successfully verified');
        }
        
    }

    return (
        <div className="wrapper">
            <div className="labels">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
                <label className="label"> Phone
                    <input
                        id="phone"
                        label="phone"
                        placeholder="Enter your phone number: +51 example"
                        onChange={(event) => setPhone(event.target.value)}
                        value={phone}
                    />
                </label>
            </div>
            <div className="labels">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
                </svg>
                <label className="label"> Otp
                    <input
                        id="otp"
                        label="otp"
                        placeholder="Enter your otp"
                        onChange={(event) => setOtp(event.target.value)}
                        value={otp}
                    />
                </label>
            </div>
            <div className="otp-buttons">
                <button disabled={loading} onClick={() => sendOtp()}>Send otp</button>
            </div>
            <div className="otp-buttons">
                <button disabled={loading} onClick={() => verifyOtp()}>Verify otp</button>
            </div>
        </div>
    );
}

export default Sms;