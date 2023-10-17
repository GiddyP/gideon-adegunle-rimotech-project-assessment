import { Field } from "formik";
import { RightArrowIcon } from "../Icons";
import style from '@styles/FormInput.module.css';

interface FormInputProps {
    handleClick?: () => void;
    handleClick2?: () => void;
    text1?: string;
    text2?: string;
    stepNum?: string;
    fieldName1?: string;
    fieldName2?: string;
    btnType?: "button" | "submit" | "reset";
    error1?: string;
    error2?: string;
    touched1?: boolean;
    touched2?: boolean;
    isFormSuccessfull?: boolean;
    isFormError?: boolean;
    handleModalClick?: () => void;
    isFormLoading?: boolean;
    isForm?: boolean;
    handleError?: () => void;
}

const FormInput = ({ handleClick, handleClick2, text1, text2, fieldName1, fieldName2, stepNum, btnType, error1, error2, touched1, touched2, isFormSuccessfull, isFormError, handleModalClick, isFormLoading, isForm, handleError }: FormInputProps) => {

    return (
        <>
            {
                isFormSuccessfull && (
                    <>
                        <div className="mt-4 mb-5">
                            <span className="text-2xl font-bold mr-2 text-dark">
                                Message was sent Successfully
                            </span>
                        </div>
                        <h2 className="text-2xl my-3 pb-5 px-2 text-center w-fit border-dark">
                            We will get in touch!
                        </h2>
                        <button
                            className="border-[1px] border-dark py-2 px-4 w-fit text-black text-xl flex items-center justify-center mx-auto group hover:bg-[#353535] hover:text-slate-100 hover:scale-205 transition-all delay-100 mb-2"
                            onClick={handleModalClick}
                        >
                            <span>ok</span>
                        </button>
                    </>
                )
            }

            {
                isFormError && (
                    <>
                        <div className="mt-4 mb-5">
                            <span className="text-2xl font-bold mr-2 text-dark">
                                Message couldn&apos;t send
                            </span>
                        </div>
                        <h2 className="text-2xl my-3 pb-5 px-2 text-center w-fit border-dark">
                            Please try again!
                        </h2>
                        <button
                            className="border-[1px] border-dark py-2 px-4 w-fit text-black text-xl flex items-center justify-center mx-auto group hover:bg-[#353535] hover:text-slate-100 hover:scale-205 transition-all delay-100 mb-2"
                            onClick={handleError}
                        >
                            <span>ok</span>
                        </button>
                    </>
                )
            }

            {
                isFormLoading && (
                    <div className="my-16">
                        <div className={`${ style.loader }`} />
                    </div>
                )
            }
            {
                isForm && (
                    <>
                        <h2 className="text-3xl font-bold mt-4 mb-7 pb-5 px-2 text-center w-fit border-b-[1px] border-dark">Get in touch!</h2>
                        <div className="my-4">
                            <span className='text-2xl mr-2'>{text1}</span>
                            <Field
                                type="text"
                                id={fieldName1}
                                name={fieldName1}
                                className={`border-b-4 border-b-gray-300 py-[1px] mt-1 focus:outline-none focus:border-[#267ae7] text-2xl w-[130px] ${ touched1 && error1 ? 'border-b-red-500' : '' }`}
                            />
                            {
                                text2 && fieldName2 && (
                                    <>
                                        <span className='text-2xl mr-2'>{text2}</span>
                                        <Field
                                            type="text"
                                            id={fieldName2}
                                            name={fieldName2}

                                            className={`border-b-4 border-b-gray-300 py-[1px] mt-1 focus:outline-none focus:border-[#267ae7] text-2xl w-[120px] ${ touched2 && error2 ? 'border-b-red-500' : '' }`}
                                        />
                                    </>
                                )
                            }
                        </div>

                        <div className="flex justify-between gap-4 my-5 text-sm">
                            <div className="flex items-center py-2 gap-2">
                                <span className='uppercase'>step</span>
                                <span className=''>{stepNum}/4</span>
                            </div>
                            {
                                handleClick2 && (
                                    <button
                                        type={btnType}
                                        onClick={handleClick2}
                                        className="flex items-center bg-[#d48816] hover:bg-primary text-white rounded-[100px] px-4 py-2 uppercase"
                                    >
                                        <RightArrowIcon className='!fill-white mr-2 !w-5 text-white rotate-[180deg]' />
                                        Back
                                    </button>
                                )
                            }
                            <button
                                type={btnType}
                                onClick={handleClick}
                                className="flex items-center bg-[#d48816] hover:bg-primary text-white rounded-[100px] px-4 py-2 uppercase"
                            >
                                Next
                                <RightArrowIcon className='!fill-white ml-2 !w-5 text-white' />
                            </button>
                        </div>
                    </>

                )
            }


        </>
    );
};

export default FormInput;