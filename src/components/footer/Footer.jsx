import React from 'react';
import s from './Footer.module.scss'
import Button from "../ui/button/Button";

const Footer = () => {
    return (
        <footer>


            <div className={s.form_back}>


                <form>

                    <div className={s.title_block}>
                        <h2>
                            Join now and get
                            <br/>
                            deposit bonus
                        </h2>

                        <span>
                                200%
                            </span>
                    </div>

                    <div className={s.inputs_block}>

                        <div className={s.name_group}>
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" autoComplete='off'/>

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" autoComplete='off' />
                        </div>

                        <div className={s.phone_group}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" autoComplete='off' />


                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" autoComplete='off'/>
                        </div>
                    </div>


                    <Button>Get Bonus</Button>

                    <p>
                        By proceeding, I accept the Privacy Policy and certify that I am over 18 years old. I agree to
                        receive company news, product updates and market overviews by email.
                        I understand that I can unsubscribe by contacting Customer Support.
                    </p>
                </form>

                <img src={require('../../assets/bank.png')} width={640} height={496} draggable={false}/>
            </div>


                <span>
                    © copyright 2023
                </span>
        </footer>
    );
};

export default Footer;