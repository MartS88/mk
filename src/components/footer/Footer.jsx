import React, {useEffect, useState} from 'react';
import s from './Footer.module.scss'
import 'react-phone-input-2/lib/bootstrap.css'
import PhoneInput from "react-phone-input-2";
import {
    isValidNumber, parsePhoneNumber,
    validatePhoneNumberLength
} from 'libphonenumber-js'

const Footer = () => {


    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('The First name is required')
    const [firstNameDirty, setFirstNameDirty] = useState(false)

    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('The Last name is required')
    const [lastNameDirty, setLastNameDirty] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('Email address is required')
    const [emailDirty, setEmailDirty] = useState(false)


    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('The Phone Number is required')
    const [phoneNumberDirty, setPhoneNumberDirty] = useState(false)


    const [activeForm, setActiveForm] = useState(true)


    const inputFirstNameCase = `${s.firstName_input} ${firstNameError && firstNameDirty ? s.error_input : ''}`;
    const inputLastNameCase = `${s.lastName_input} ${lastNameError && lastNameDirty ? s.error_input : ''}`;
    const inputEmailCase = `${s.email_input} ${emailError && emailDirty ? s.error_input : ''}`;
    const inputPhoneCase = `${s.phone_input} ${phoneNumberError && phoneNumberDirty ? s.error_input : ''}`;
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstNameDirty(true);
                break;

            case 'lastName':
                setLastNameDirty(true);
                break;

            case 'email':
                setEmailDirty(true);
                break;

            case 'phone':
                setPhoneNumberDirty(true);
                break;

            default:
                break;
        }
    };


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Please enter a valid email address')

        } else {
            setEmailError('')
        }
    }

    const nameHandler = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError('The name must contain at least 2 letters.');
        } else {
            setFirstNameError('');
        }
    };

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError('The Last name must contain at least 2 letters.');
        } else {
            setLastNameError('');
        }
    };


    const handlePhoneChange = (value, country, e, formattedValue) => {
        setPhoneNumber(value);

        if (value.length > 1) {
            const phoneNumberObj = parsePhoneNumber(value, country.countryCode.toUpperCase());
            const formattedPhoneNumber = phoneNumberObj ? phoneNumberObj.formatInternational() : '';
            const isValid = isValidNumber(formattedPhoneNumber, country);
            if (!isValid) {
                setPhoneNumberError('Type a correct phone number');
                setPhoneNumberDirty(true);
            } else {
                setPhoneNumberError('');
                setPhoneNumberDirty(false);
            }

        }
    };



    useEffect(() => {
        if (firstNameError || lastNameError || emailError || phoneNumberError) {
            setActiveForm(false)
        } else {
            setActiveForm(true)
        }

    }, [firstNameError , lastNameError, emailError, phoneNumberError,   ]);



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
                            <div className={s.label_group}>
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    className={inputFirstNameCase}
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    autoComplete='off'
                                    onBlur={e => blurHandler(e)}
                                    onChange={e => nameHandler(e)}
                                />

                                <div className={s.error_container}>
                                    {firstNameDirty && firstNameError && (
                                        <div className={`${s.error} ${s.visible}`}>
                                            {firstNameError}
                                        </div>
                                    )}
                                </div>

                            </div>


                            <div className={s.label_group}>
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    className={inputLastNameCase}
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    autoComplete='off'
                                    onBlur={e => blurHandler(e)}
                                    onChange={e => lastNameHandler(e)}
                                />

                                <div className={s.error_container}>
                                    {lastNameDirty && lastNameError && (
                                        <div className={`${s.error} ${s.visible}`}>
                                            {lastNameError}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className={s.phone_group}>
                            <div className={s.label_group}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    className={inputEmailCase}
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete='off'
                                    onBlur={e => blurHandler(e)}
                                    onChange={e => emailHandler(e)}

                                />

                                <div className={s.error_container}>
                                    {emailDirty && emailError && (
                                        <div className={`${s.error} ${s.visible}`}>
                                            {emailError}
                                        </div>
                                    )}
                                </div>


                            </div>

                            <div className={s.label_group}>

                                <label htmlFor="phoneNumber">Phone Number:</label>

                                <PhoneInput
                                    onBlur={() => blurHandler({ target: { name: 'phone' } })}
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    className={inputPhoneCase}
                                    country={'in'}
                                    value={phoneNumber}
                                    onChange={(value, country, e, formattedValue) => handlePhoneChange(value, country, e, formattedValue)}
                                    inputProps={{
                                        required: true,}}
                                />



                                <div className={s.error_container}>
                                    {phoneNumberDirty && phoneNumberError && (
                                        <div className={`${s.error} ${s.visible}`}>
                                            {phoneNumberError}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>

                    </div>


                    <button
                        className={!activeForm ? s.button_disabled : s.submit_button}
                        onClick={() => console.log('activeForm',activeForm)}
                    >
                        Get Bonus
                    </button>

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



//
// useEffect(() => {
//     if (emailError || passwordError) {
//         setActiveForm(false)
//     } else {
//         setActiveForm(true)
//     }
//
// }, [emailError, passwordError]);



// const handlePhoneChange = (value, country, e, formattedValue) => {
//
//     if (phoneNumber === '') {
//         setPhoneNumber(country);
//     }
//         setPhoneNumber(value);
//         const phoneNumberObj = parsePhoneNumber(value, country.countryCode.toUpperCase());
//         const formattedPhoneNumber = phoneNumberObj ? phoneNumberObj.formatInternational() : '';
//         const isValid = isValidNumber(formattedPhoneNumber,country)
//
//     if (!isValid) {
//         setPhoneNumberError('Type a correct phone number')
//         setPhoneNumberDirty(true)
//     }
//     else {
//         setPhoneNumberError('')
//         setPhoneNumberDirty(false)
//     }
//
//
//     console.log('phone', phoneNumberObj)
//     console.log('form', formattedPhoneNumber)
//     console.log('isValid', isValid)
//
// }