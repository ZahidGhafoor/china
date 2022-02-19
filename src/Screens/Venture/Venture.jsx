import React, { useState } from 'react'
import "./Venture.scss"

const Tell = (props) => {
    return (
        <>

            <div className="tab__data">
                <div className="heading">
                    Tell us more
                </div>
                <div className="tab__form">
                    <div className="first">
                        <div className="input__heading">Are you Comfortable?</div>
                        <select className="first__name" placeholder='Please Select' name="comfortable" onChange={props.SelectEvent} value={props.enteredData.comfortable} >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>


                    <div className="bottom">
                        <div className="first">
                            <div className="input__heading">Greatest Strength</div>
                            <input type="text" name='strength' value={props.enteredData.strength} onChange={props.InputEvent} placeholder='Greatest strength' className="first__name" />
                        </div>

                        <div className="first">
                            <div className="input__heading">Greatest Weakness</div>
                            <input type="text" name='weekness' value={props.enteredData.weekness} onChange={props.InputEvent} placeholder='Greatest Weakness' className="first__name" />
                        </div>
                        <div className="first">
                            <div className="input__heading">Future Goals</div>
                            <input type="text" name='goal' value={props.enteredData.goal} onChange={props.InputEvent} placeholder='Future Goals' className="first__name" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

const Personal = (props) => {
    return (
        <>

            <div className="tab__data">
                <div className="heading">
                    Personal Information
                </div>
                <div className="tab__form">
                    <div className="first">
                        <div className="input__heading">Account Type</div>
                        <select className="first__name" id="cars" name="accountType" onChange={props.SelectEvent} value={props.enteredData.accountType}>
                            <option value="student">Student Account</option>
                            <option value="business">Business Account</option>
                            <option value="salary">Salary Account</option>
                        </select>
                    </div>


                    <div className="bottom">
                        <div className="first">
                            <div className="input__heading">Salutations</div>
                            <select className="first__name" name="salutation" onChange={props.SelectEvent} value={props.enteredData.accountType}>
                                <option value="mr">Mr.
                                </option>
                                <option value="ms">
                                    Ms.</option>
                                <option value="mrs">Mrs.</option>
                            </select>
                        </div>

                        <div className="first">
                            <div className="input__heading">First Name</div>
                            <input name='firstName' value={props.enteredData.firstName} onChange={props.InputEvent} type="text" placeholder='First Name' className="first__name" />
                        </div>
                        <div className="first">
                            <div className="input__heading">Last Name</div>
                            <input name='lastName' value={props.enteredData.lastName} onChange={props.InputEvent} type="text" placeholder='Last Name' className="first__name" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

const Income = (props) => {
    return (
        <>

            <div className="tab__data">
                <div className="heading">
                    Income Details
                </div>
                <div className="tab__form">
                    <div className="first">
                        <div className="input__heading">Salary Expectations</div>
                        <select className="first__name" id="cars"name="salaryexpect" onChange={props.SelectEvent} value={props.enteredData.salaryexpect}>
                            <option value="40">40,000-50,000</option>
                            <option value="50">50,000-60,000</option>
                            <option value="60">60,000-70,000</option>
                            <option value="70">70,000-80,000</option>
                            <option value="80">80,000-100,000</option>


                        </select>
                    </div>


                    <div className="bottom">
                        <div className="first">
                            <div className="input__heading">Current Salary</div>
                            <input name='currentsalary' value={props.enteredData.currentsalary} onChange={props.InputEvent} type="number" placeholder='Current Salary' className="first__name" />
                        </div>

                        <div className="first">
                            <div className="input__heading">Family Members</div>
                            <input name='members' value={props.enteredData.members} onChange={props.InputEvent} type="number" placeholder='Family Members' className="first__name" />
                        </div>
                        <div className="first">
                            <div className="input__heading">Father's occupation</div>
                            <input name='occupation' value={props.enteredData.occupation} onChange={props.InputEvent} type="text" placeholder="Father's occupation" className="first__name" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

const Documentation = (props) => {
    return (
        <>

            <div className="tab__data">
                <div className="heading">
                    Documentations
                </div>
                <div className="tab__form">
                    <div className="first">
                        <div className="input__heading">Work from Home?</div>
                        <select className="first__name" id="cars" name="workfromhome" onChange={props.SelectEvent} value={props.enteredData.workfromhome}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                    </div>


                    <div className="bottom">
                        <div className="first">
                            <div className="input__heading">Why You Interested in This Role?</div>
                            <input name='whyInterested' value={props.enteredData.whyInterested} onChange={props.InputEvent} type="text" placeholder='Strategies and Mindset' className="first__name" />
                        </div>

                        <div className="first">
                            <div className="input__heading">Strategies and Mindset</div>
                            <input name='strategies' value={props.enteredData.strategies} onChange={props.InputEvent} type="text" className="first__name" />
                        </div>
                        <div className="first">
                            <div className="input__heading">Challenges Do You Want</div>
                            <input name='challenges' value={props.enteredData.challenges} onChange={props.InputEvent} type="text" placeholder='Challenges' className="first__name" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
const Terms = (props) => {
    return (
        <>

            <div className="tab__data">
                <div className="heading">
                    Terms & Conditions
                </div>
                <div className="tab__form">
                    <div className="first">
                        <div className="input__heading">Terms and Conditions?</div>
                        <select className="first__name" name="terms" onChange={props.SelectEvent} value={props.enteredData.terms}>
                            <option value="agree">Agree</option>
                            <option value="disagree">Disagree</option>

                        </select>
                    </div>


                    <div className="bottom">
                        <div className="first">
                            <div className="input__heading">Rules of conduct</div>
                            <input name='rules' value={props.enteredData.rules} onChange={props.InputEvent} type="text" className="first__name" />
                        </div>

                        <div className="first">
                            <div className="input__heading">User restrictions.</div>
                            <input name='restrictions' value={props.enteredData.restrictions} onChange={props.InputEvent} type="text" className="first__name" />
                        </div>
                        <div className="first">
                            <div className="input__heading">Third party terms and conditions</div>
                            <input name='thirdparty' value={props.enteredData.thirdparty} onChange={props.InputEvent} type="text" className="first__name" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
const Review = (props) => {
    return (
        <>

            <div className="tab__data">
                <div className="heading">
                    Review your Application
                </div>
                <div className="tab__form">
                    <div className="first">
                        <div className="input__heading">Are you sure?</div>
                        <select className="first__name" name="sure" onChange={props.SelectEvent} value={props.enteredData.sure}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                    </div>


                    <div className="bottom">
                        <div className="first">
                            <div className="input__heading">What expect from Us?</div>
                            <input name='expect' value={props.enteredData.expect} onChange={props.InputEvent} type="text" className="first__name" />
                        </div>

                        <div className="first">
                            <div className="input__heading">How you understand the job?</div>
                            <input name='understand' value={props.enteredData.understand} onChange={props.InputEvent} type="text" className="first__name" />
                        </div>
                        <div className="first">
                            <div className="input__heading">FeedBack</div>
                            <input name='feedback' value={props.enteredData.feedback} onChange={props.InputEvent} type="text" className="first__name" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

const Venture = () => {

    const [tab, setTab] = useState(1);
    const [enteredData, setEnteredData] = useState({
        // Tell Us More
        comfortable: "yes",
        strength: "",
        weekness: "",
        goal: "",

        // Personal Info
        accountType: "student",
        salutation: "mr",
        firstName: "",
        lastName: "",

        // Income details
        salaryexpect: "40,000-50,000",
        currentsalary: "",
        members: "",
        occupation: "",

        // Documentations

        workfromhome: "yes",
        whyInterested: "",
        strategies: "",
        challenges: "",

        // Terms and Conditions

        terms: "agress",
        rules: "",
        restrictions: "",
        thirdparty: "",

        // Review

        sure: "yes",
        expect: "",
        understand: "",
        feedback: ""



    })

    const InputEvent = (event) => {
        let { name, value } = event.target;
        setEnteredData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const SelectEvent = (event) =>{
        console.log( "Value ============== " , event.target.value);
        console.log( "NAME ============== " , event.target.name);

        let { name, value } = event.target;

        setEnteredData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const next = () => {

        if(tab == 1){
            if(!enteredData.strength || !enteredData.weekness || !enteredData.goal ){
                alert("Fill All")
            }else{
                setTab(2)
            }
        }else if(tab == 2){
            
        }

        // if (tab >= 6) {
        //     setTab(6);
        // } else {
        //     setTab(parseFloat(tab) + 1);
        // }
        console.log("next", tab);
    };
    const prev = () => {
        if (tab <= 1) {
            setTab(1);
        } else {
            setTab(parseFloat(tab) - 1);
        }
        console.log("prev", tab);
    };
  

    return (
        <>
            <div className="venture__container">
                <div className="tabs">
                    <div id="1" className={tab == 1 ? "active" : "first"}>
                        <div className="text">1. Tell us more</div>
                        <div className="border"></div>

                    </div>
                    <div id="2" className={tab == 2 ? "active" : "first"}>
                        <div className="text">2. Personal Information</div>
                        <div className="border"></div>

                    </div>
                    <div id="3" className={tab == 3 ? "active" : "first"}>
                        <div className="text">3. Income Details</div>
                        <div className="border"></div>

                    </div>
                    <div id="4" className={tab == 4 ? "active" : "first"}>
                        <div className="text">4. Documentations</div>
                        <div className="border"></div>

                    </div>
                    <div id="5" className={tab == 5 ? "active" : "first"}>
                        <div className="text">5. Terms & Conditions</div>
                        <div className="border"></div>

                    </div>
                    <div id="6" className={tab == 6 ? "active" : "first"}>
                        <div className="text">6. Review Application</div>
                        <div className="border"></div>

                    </div>
                </div>
                {
                    tab == 1 ?
                        <Tell enteredData={enteredData} InputEvent={InputEvent} SelectEvent={SelectEvent} /> :
                        tab == 2 ?
                            <Personal enteredData={enteredData} InputEvent={InputEvent} SelectEvent={SelectEvent} /> :
                            tab == 3 ?
                                <Income enteredData={enteredData} InputEvent={InputEvent} SelectEvent={SelectEvent} /> :
                                tab == 4 ?
                                    <Documentation enteredData={enteredData} InputEvent={InputEvent} SelectEvent={SelectEvent} /> :
                                    tab == 5 ?
                                        <Terms enteredData={enteredData} InputEvent={InputEvent} SelectEvent={SelectEvent} /> :
                                        <Review enteredData={enteredData} InputEvent={InputEvent} SelectEvent={SelectEvent} />


                }


                {
                    tab == 6 ?
                        <div className="btn">
                            <button onClick={prev} className="first">BACK</button>
                            <button onClick={next} className="third">SUBMIT</button>
                        </div> :
                        tab == 1 ?
                            <div className="btn">
                                <button style={{opacity:0}} className="first">BACK</button>
                                <button onClick={next} className="third">CONTINUE</button>
                            </div> :

                            <div className="btn">
                                <button onClick={prev} className="first">BACK</button>
                                <button onClick={next} className="third">CONTINUE</button>
                            </div>
                }

            </div>
        </>
    )
}

export default Venture