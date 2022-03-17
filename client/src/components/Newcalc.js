import React, { useState } from "react";
import Pdf from "react-to-pdf";
import { useSelector } from 'react-redux';
import { Newcal } from "../actions/auth";
const Newcalc = () => {
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [optimalweight, setOptimalweight] = useState("");
    const ref = React.createRef();
    const { auth } = useSelector((state) => ({ ...state }));
    const calculate = async (e) => {
        e.preventDefault();
        const formValid = +height > 0 && +mass > 0;
        if (!formValid) {
            return;
        }
        const heightSquared = (height / 100 * height / 100);
        const bmi = (Math.round((mass / heightSquared) * 100) / 100);
        setBmi(bmi);
        const low = Math.round(18.5 * heightSquared);
        const high = Math.round(24.99 * heightSquared);


        if (bmi >= 18.5 && bmi <= 24.99) {
            setMessage("You are in a healthy weight range");
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            setMessage("You are overweight");
        }
        else if (bmi >= 30) {
            setMessage("You are obese");
        }
        else if (bmi < 18.5) {
            setMessage("You are under weight");
        }
        setOptimalweight("Your suggested weight range is between "+low+"-"+high);
        try {
            const result = await Newcal({ name:auth.user.email, height, weight: mass, bmi })

        }
        catch (err) {
            console.log(err)
        }
    };


    return (
        <div className="App">
            <form onSubmit={calculate}>

                <div class="col">
                    <div class="row row-sm-4">
                        <center>
                            <label>Enter Your Name:</label>
                            
                            <input value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                        </center>
                    </div>
                    <div class="row row-sm-4">
                        <center>
                            <label>Height in Cm</label>
                            <input value={height} onChange={(e) => setHeight(e.target.value)} />
                        </center>
                    </div>
                
                        <div class="row row-sm-4">
                        <center>
                            <label>Mass in kg</label>
                            <input value={mass} onChange={(e) => setMass(e.target.value)} />
                    </center>
                
                </div>

                <div class="row row-sm-4">
                    <center>
                        <button className="btn btn-info mt-3" type="submit">calculate</button>
                    </center>
                </div>
                <div>
                    <center>
                        <Pdf targetRef={ref} filename="BMI-details.pdf">
                            {({ toPdf }) => <button className="btn btn-primary show mt-3" onClick={toPdf}>Generate Pdf</button>}
                        </Pdf>
                    </center>

                </div>
        </div>
            </form >
    <div ref={ref}>
    {/* <div text-align="center"> */}
            <h3>BMI Details</h3>
        {/* </div> */}
        <div className="">
            <table class="table table-bordered table-primary">

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Height</th>
                        <th scope="col">weight</th>
                        <th scope="col">BMI</th>
                        <th scope="col">Category</th>

                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td>{height}</td>
                        <td>{mass}</td>
                        <td>{bmi}</td>
                        <td>{message}</td>
                    </tr>
                </tbody>

            </table>
        </div>
            {optimalweight}
    </div>

       </div>
    );
}
export default Newcalc;