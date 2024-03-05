'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define your FormValues interface
type FormValues = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const FormComponent = () => {
    // State variables
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

    // Form validation schema
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phone: yup.string()
            .matches(/^[+]?[0-9]+$/, 'Phone number must be numeric')
            .required("Phone is required"),
        message: yup.string().required("Message is required"),
    });

    // useForm hook for form handling
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({ resolver: yupResolver(schema) });

    // Function to handle form submission
    const onSubmit = async (data: FormValues) => {
        setIsLoading(true); // Set loading to true before making the request
        try {
            const response = await axios.post('/api/submitForm', data);
            console.log('Data submitted successfully:', response.data);
            setShowSuccessModal(true); // Show success modal
            reset(); // Reset the form fields
        } catch (error) {
            console.error('Error submitting data:', error);
        } finally {
            setIsLoading(false); // Set loading to false after the request is complete
        }
    };

    // Function to close the success modal
    const handleCloseModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            {/* Form */}
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2">
                {/* Form inputs */}
                <div className="relative">
                    <label className="block mb-2 font-semibold text-blue-600">Name</label>
                    <input
                        type="text"
                        {...register("name")}
                        className={`w-full px-3 py-2 rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:border-blue-500`}
                        placeholder="Enter your name"
                    />
                    {errors.name && (
                        <span className="text-red-500 mt-1">{errors.name.message}</span>
                    )}
                </div>
                <div className="relative">
                    <label className="block mb-2 font-semibold text-blue-600">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className={`w-full px-3 py-2 rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:border-blue-500`}
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <span className="text-red-500 mt-1">{errors.email.message}</span>
                    )}
                </div>
                <div className="relative">
                    <label className="block mb-2 font-semibold text-blue-600">Phone</label>
                    <input
                        type="text"
                        {...register("phone")}
                        className={`w-full px-3 py-2 rounded-md border ${errors.phone ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:border-blue-500`}
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                        <span className="text-red-500 mt-1">{errors.phone.message}</span>
                    )}
                </div>
                <div className="sm:col-span-2 relative">
                    <label className="block mb-2 font-semibold text-blue-600">Message</label>
                    <textarea
                        {...register("message")}
                        className={`w-full px-3 py-2 rounded-md border ${errors.message ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:border-blue-500 resize-none `}
                        placeholder="Enter your message"
                        rows={4}
                    />
                    {errors.message && (
                        <span className="text-red-500 mt-1">{errors.message.message}</span>
                    )}
                </div>
                <div className="sm:col-span-2 relative">
                    <button
                        type="submit"
                        disabled={isLoading} // Disable button when loading
                        className={`w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {isLoading ? "Submitting..." : "Submit"}
                    </button>
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-blue-600 bg-opacity-50 rounded-md">
                            <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.5a.5.5 0 011 0V4a8 8 0 01-8 8z"></path>
                            </svg>
                        </div>
                    )}
                </div>
                {/* Form inputs */}
            </form>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
                        <h2 className="text-lg font-bold mb-4">Message Submitted Successfully!</h2>
                        <p className="text-gray-600">Thank you for reaching out to us! Your message has been successfully submitted. Our team will review it and get back to you shortly. We appreciate your patience and look forward to assisting you further.</p>
                        <button onClick={handleCloseModal} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none w-full">Close</button>
                    </div>
                </div>
            )}
        </div>

    );
};

export default FormComponent;