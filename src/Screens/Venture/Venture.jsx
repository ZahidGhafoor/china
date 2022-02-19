import React from 'react'
import "./Venture.scss"

const Venture = () => {

    const Tell = () => {
        return (
            <>

                <div className="tab__data">
                    <div className="heading">
                        Tell us more
                    </div>
                    <div className="tab__form">
                        <div className="first">
                            <div className="input__heading">Are you Comfortable?</div>
                            <select className="first__name" id="cars" name="first__name">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                                
                            </select>
                        </div>


                        <div className="bottom">
                        <div className="first">
                                <div className="input__heading">Greatest Strength</div>
                                <input type="text" placeholder='Greatest strength' className="first__name" />
                            </div>

                            <div className="first">
                                <div className="input__heading">Greatest Weakness</div>
                                <input type="text" placeholder='Greatest Weakness' className="first__name" />
                            </div>
                            <div className="first">
                                <div className="input__heading">Future Goals</div>
                                <input type="text" placeholder='Future Goals' className="first__name" />
                            </div>

                        </div>

                    </div>
                </div>

            </>
        )
    }

    const Personal = () => {
        return (
            <>

                <div className="tab__data">
                    <div className="heading">
                        Personal Information
                    </div>
                    <div className="tab__form">
                        <div className="first">
                            <div className="input__heading">Account Type</div>
                            <select className="first__name" id="cars" name="first__name">
                                <option value="volvo">Student Account</option>
                                <option value="saab">Business Account</option>
                                <option value="mercedes">Salary Account</option>
                            </select>
                        </div>


                        <div className="bottom">
                            <div className="first">
                                <div className="input__heading">Salutations</div>
                                <select className="first__name" id="cars" name="first__name">
                                    <option value="volvo">Mr.
                                    </option>
                                    <option value="saab">
                                        Ms.</option>
                                    <option value="mercedes">Mrs.</option>
                                </select>
                            </div>

                            <div className="first">
                                <div className="input__heading">First Name</div>
                                <input type="text" placeholder='First Name' className="first__name" />
                            </div>
                            <div className="first">
                                <div className="input__heading">Last Name</div>
                                <input type="text" placeholder='Last Name' className="first__name" />
                            </div>

                        </div>

                    </div>
                </div>

            </>
        )
    }

    const Income = () => {
        return (
            <>

                <div className="tab__data">
                    <div className="heading">
                        Income Details
                    </div>
                    <div className="tab__form">
                        <div className="first">
                            <div className="input__heading">Salary Expectations</div>
                            <select className="first__name" id="cars" name="first__name">
                                <option value="volvo">40,000-50,000</option>
                                <option value="volvo">50,000-60,000</option>
                                <option value="volvo">60,000-70,000</option>
                                <option value="volvo">70,000-80,000</option>
                                <option value="volvo">80,000-100,000</option>

                                
                            </select>
                        </div>


                        <div className="bottom">
                        <div className="first">
                                <div className="input__heading">Current Salary</div>
                                <input type="number" placeholder='Current Salary' className="first__name" />
                            </div>

                            <div className="first">
                                <div className="input__heading">Family Members</div>
                                <input type="number" placeholder='Family Members' className="first__name" />
                            </div>
                            <div className="first">
                                <div className="input__heading">Father's occupation</div>
                                <input type="text" placeholder="Father's occupation" className="first__name" />
                            </div>

                        </div>

                    </div>
                </div>

            </>
        )
    }

    const Documentation = () => {
        return (
            <>

                <div className="tab__data">
                    <div className="heading">
                        Documentations
                    </div>
                    <div className="tab__form">
                        <div className="first">
                            <div className="input__heading">Work from Home?</div>
                            <select className="first__name" id="cars" name="first__name">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                                
                            </select>
                        </div>


                        <div className="bottom">
                        <div className="first">
                                <div className="input__heading">Why You Interested in This Role?</div>
                                <input type="text" className="first__name" />
                            </div>

                            <div className="first">
                                <div className="input__heading">Strategies and Mindset</div>
                                <input type="text" placeholder='Strategies and Mindset' className="first__name" />
                            </div>
                            <div className="first">
                                <div className="input__heading">Challenges Do You Want</div>
                                <input type="text" placeholder='Challenges' className="first__name" />
                            </div>

                        </div>

                    </div>
                </div>

            </>
        )
    }
    const Terms = () => {
        return (
            <>

                <div className="tab__data">
                    <div className="heading">
                        Terms & Conditions
                    </div>
                    <div className="tab__form">
                        <div className="first">
                            <div className="input__heading">Terms and Conditions?</div>
                            <select className="first__name" id="cars" name="first__name">
                                <option value="volvo">Agree</option>
                                <option value="saab">Disagree</option>
                                
                            </select>
                        </div>


                        <div className="bottom">
                        <div className="first">
                                <div className="input__heading">Rules of conduct</div>
                                <input type="text" className="first__name" />
                            </div>

                            <div className="first">
                                <div className="input__heading">User restrictions.</div>
                                <input type="text" className="first__name" />
                            </div>
                            <div className="first">
                                <div className="input__heading">Third party terms and conditions</div>
                                <input type="text" className="first__name" />
                            </div>

                        </div>

                    </div>
                </div>

            </>
        )
    }
    const Review = () => {
        return (
            <>

                <div className="tab__data">
                    <div className="heading">
                        Review your Application
                    </div>
                    <div className="tab__form">
                        <div className="first">
                            <div className="input__heading">Are you sure?</div>
                            <select className="first__name" id="cars" name="first__name">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                                
                            </select>
                        </div>


                        <div className="bottom">
                        <div className="first">
                                <div className="input__heading">What expect from Us?</div>
                                <input type="text" className="first__name" />
                            </div>

                            <div className="first">
                                <div className="input__heading">How you understand the job?</div>
                                <input type="text" className="first__name" />
                            </div>
                            <div className="first">
                                <div className="input__heading">FeedBack</div>
                                <input type="text" className="first__name" />
                            </div>

                        </div>

                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            <div className="venture__container">
                <div className="tabs">
                    <div className="first">
                        <div className="text">1. Tell us more</div>
                        <div className="border"></div>

                    </div>
                    <div className="first">
                        <div className="text">2. Personal Information</div>
                        <div className="border"></div>

                    </div>
                    <div className="first">
                        <div className="text2">3. Income Details</div>
                        <div className="border2"></div>

                    </div>
                    <div className="first">
                        <div className="text2">4. Documentations</div>
                        <div className="border2"></div>

                    </div>
                    <div className="first">
                        <div className="text2">5. Terms & Conditions</div>
                        <div className="border2"></div>

                    </div>
                    <div className="first">
                        <div className="text2">6. Review Application</div>
                        <div className="border2"></div>

                    </div>
                </div>

                <Review />

                <div className="btn">
                    <button className="first">Back</button>
                    <button className="third">Continue</button>
                </div>


            </div>
        </>
    )
}

export default Venture