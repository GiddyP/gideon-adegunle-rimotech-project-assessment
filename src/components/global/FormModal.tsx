import { Formik, Form, Field, ErrorMessage, useFormik, FormikProvider } from 'formik';
import { CloseCircleIcon, LeftArrow, RightArrowIcon } from '../Icons';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import FormInput from '../Forms/FormInput';
import { EnquiryFormModel } from '../config/models';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@config/store';
import { toggleFormModal } from '@config/features/formModal';

interface FormValues {
    name: string;
    email: string;
    interest: string;
    message: string;
}

const FormModal = () => {
    const dispatch = useDispatch();
    const [isNamenEmail, setIsNamenEmail] = useState(true);
    const [isInterest, setIsInterest] = useState(false);
    const [isMessage, setIsMessage] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleModalClick = () => { 
        dispatch(toggleFormModal({ isOpen: !isOpen })); 
        setIsNamenEmail(true)
        setIsInterest(false)
        setIsMessage(false)
        setIsSuccessful(false)
        setIsError(false)
        setIsLoading(false)
    };

    const handleErrorClick = () => { 
        // dispatch(toggleFormModal({ isOpen: !isOpen })); 
        setIsNamenEmail(true)
        setIsInterest(false)
        setIsMessage(false)
        setIsLoading(false)
        setIsError(false)
    };

    const { isOpen } = useSelector(
        (state: RootState) => state.formModal
    );

    const initialValues: FormValues = {
        name: '',
        email: '',
        interest: '',
        message: '',
    };

    const handleEmailSubmit = (values: FormValues) => {
        setIsNamenEmail(false)
        setIsInterest(false)
        setIsMessage(false)
        setIsLoading(true)
        // Handle the email submission here
        const params = {
            from_name: values.name,
            user_email: values.email,
            message: `${ values.interest } - ${ values.message } `
        };

        // Create a hidden form element
        const form = document.createElement('form');
        form.style.display = 'none';

        // Create and set properties for each input element
        const fromNameInput = document.createElement('input');
        fromNameInput.type = 'text';
        fromNameInput.name = 'from_name';
        fromNameInput.value = params.from_name;

        const userEmailInput = document.createElement('input');
        userEmailInput.type = 'email';
        userEmailInput.name = 'user_email';
        userEmailInput.value = params.user_email;

        const messageTextarea = document.createElement('textarea');
        messageTextarea.name = 'message';
        messageTextarea.value = params.message;

        // Append the input elements to the form element
        form.appendChild(fromNameInput);
        form.appendChild(userEmailInput);
        form.appendChild(messageTextarea);

        document.body.appendChild(form); // Append the form to the document body

        emailjs
            .sendForm('service_z2vjxrr', 'template_6rnxqya', form, 'R5oIKR5iq9NJ5eJet')
            .then((res) => {
                // console.log('success! ' + res.status);
                setIsLoading(false)
                setIsSuccessful(true);
                setIsMessage(!isMessage);
            })
            .catch((error) => {
                setIsLoading(false)
                setIsError(true)
            });

        document.body.removeChild(form); // Remove the form from the document body after submission
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: EnquiryFormModel,
        onSubmit: (values) => {
            handleEmailSubmit(values);
        },
    });

    const handleNameEmailClick = () => {
        if (
            formik.values.name
            && formik.values.email
            && !formik.errors.name
            && !formik.errors.email
        ) {
            setIsNamenEmail(!isNamenEmail);
            setIsInterest(!isInterest);
        } else if (!formik.values.name && !formik.values.email) {
            formik.setErrors({
                name: !formik.values.name ? 'Name is required' : '',
                email: !formik.values.email ? 'Email is required' : '',
            });
            formik.setTouched({
                name: !formik.values.name ? true : false,
                email: !formik.values.email ? true : false,
            });
        }
    };

    const handleInterestBackClick = () => {
        setIsNamenEmail(!isNamenEmail);
        setIsInterest(!isInterest);
    };

    const handleInterestClick = () => {
        if (formik.values.interest
            && !formik.errors.interest
        ) {
            setIsInterest(!isInterest);
            setIsMessage(!isMessage);
        } else if (!formik.values.interest) {
            formik.setErrors({
                interest: !formik.values.interest ? 'Interest is required' : '',
            });
            formik.setTouched({
                interest: !formik.values.interest ? true : false,
            });
        }
    };

    const handleMessageBackClick = () => {
        setIsInterest(!isInterest);
        setIsMessage(!isMessage);
    };

    const handleMessageClick = () => {
        if (formik.values.message
            && !formik.errors.message
        ) {
            formik.handleSubmit();
        } else if (!formik.values.message) {
            formik.setErrors({
                message: !formik.values.message ? 'Message is required' : '',
            });
            formik.setTouched({
                message: !formik.values.message ? true : false,
            });
        }
    };

    return (
        <>
            {
                isOpen && (
                    <div
                        className="fixed inset-0 flex items-center justify-center z-50"
                    >
                        <div className="absolute inset-0 bg-black opacity-90" />
                        <FormikProvider value={formik}>
                            <Form className="flex flex-col items-center bg-white rounded-lg px-4 py-6 w-[60%] md:w-[90%] relative" >
                                <CloseCircleIcon
                                    className='!w-9 absolute top-[10px] right-[18px] hover:opacity-60 cursor-pointer transition-delay-200'
                                    onClick={handleModalClick}
                                />
                                {
                                    isNamenEmail && (
                                        <FormInput
                                            handleClick={handleNameEmailClick}
                                            text1='Hi, my name is'
                                            fieldName1='name'
                                            text2='and my email is'
                                            fieldName2='email'
                                            stepNum='1'
                                            btnType='button'
                                            error1={formik.errors.name}
                                            error2={formik.errors.email}
                                            touched1={formik.touched.name}
                                            touched2={formik.touched.email}
                                            isForm={true}
                                        />
                                    )
                                }
                                {
                                    isInterest && (
                                        <FormInput
                                            handleClick={handleInterestClick}
                                            handleClick2={handleInterestBackClick}
                                            text1='I am Interested in'
                                            fieldName1='interest'
                                            stepNum='2'
                                            btnType='button'
                                            error1={formik.errors.interest}
                                            touched1={formik.touched.interest}
                                            isForm={true}
                                        />
                                    )
                                }
                                {
                                    isMessage && (
                                        <FormInput
                                            handleClick={handleMessageClick}
                                            handleClick2={handleMessageBackClick}
                                            text1='Enter your message:'
                                            fieldName1='message'
                                            stepNum='3'
                                            btnType='button'
                                            error1={formik.errors.message}
                                            touched1={formik.touched.message}
                                            isForm={true}
                                        />
                                    )
                                }
                                {
                                    isSuccessful && (
                                        <FormInput
                                            isFormSuccessfull={isSuccessful}
                                            handleModalClick={handleModalClick}
                                        />
                                    )
                                }
                                {
                                    isError && (
                                        <FormInput
                                            isFormError={isError}
                                            handleError={handleErrorClick}
                                        />
                                    )
                                }
                                {
                                    isLoading && (
                                        <FormInput
                                            isFormLoading={isLoading}
                                            handleModalClick={handleModalClick}
                                        />
                                    )
                                }
                            </Form>
                        </FormikProvider>
                    </div >
                )
            }
        </>
    );
};

export default FormModal;