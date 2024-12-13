"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    outsourcingType: "",
    serviceType: "",
    inquiry: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "유효한 이메일을 입력해주세요.";
      }
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "전화번호를 입력해주세요.";
    } else {
      const phoneRegex = /^\d{10,11}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "유효한 전화번호를 입력해주세요.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.outsourcingType) {
      newErrors.outsourcingType = "외주 유형을 선택해주세요.";
    }
    if (!formData.serviceType) {
      newErrors.serviceType = "서비스 유형을 선택해주세요.";
    }
    if (!formData.inquiry.trim()) {
      newErrors.inquiry = "문의 내용을 입력해주세요.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      try {
        await addDoc(collection(db, "contacts"), formData); // 데이터 저장
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          outsourcingType: "",
          serviceType: "",
          inquiry: "",
        });
        setStep(1);
        setErrors({});
      } catch (error) {
        console.error("Error adding document: ", error); // 에러 확인
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-xl shadow-2xl text-white space-y-6 relative overflow-hidden"
    >
      {/* Progress Indicator */}
      <div className="flex justify-center space-x-4 mb-8 relative z-10">
        <div
          className={`w-2 h-2 rounded-full ${
            step === 1 ? "bg-purple-500" : "bg-gray-500"
          }`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full ${
            step === 2 ? "bg-purple-500" : "bg-gray-500"
          }`}
        ></div>
      </div>

      {/* Step 1: Basic Information */}
      {step === 1 && (
        <>
          <div className="relative z-10">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-4 py-2 bg-gray-700 bg-opacity-50 border ${
                errors.name ? "border-red-500" : "border-gray-600"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              placeholder="이름을 입력하세요"
              required
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="relative z-10">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 bg-gray-700 bg-opacity-50 border ${
                errors.email ? "border-red-500" : "border-gray-600"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              placeholder="이메일을 입력하세요"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="relative z-10 ">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              전화번호
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`w-full px-4 py-2 bg-gray-700 bg-opacity-50 border ${
                errors.phone ? "border-red-500" : "border-gray-600"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              placeholder="전화번호를 입력하세요"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="relative z-10">
            <button
              type="button"
              onClick={handleNext}
              className="mt-8 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-medium py-2 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
            >
              다음
            </button>
          </div>
        </>
      )}

      {/* Step 2: Detailed Information */}
      {step === 2 && (
        <>
          <div className="relative z-10">
            <label
              htmlFor="outsourcingType"
              className="block text-sm font-medium mb-2"
            >
              외주 유형
            </label>
            <select
              id="outsourcingType"
              name="outsourcingType"
              className={`w-full px-4 py-2 bg-gray-700 bg-opacity-50 border ${
                errors.outsourcingType ? "border-red-500" : "border-gray-600"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              required
              value={formData.outsourcingType}
              onChange={handleChange}
            >
              <option value="">선택하세요</option>
              <option value="앱개발">앱개발</option>
              <option value="웹개발">웹개발</option>
              <option value="기타">기타</option>
            </select>
            {errors.outsourcingType && (
              <p className="text-red-400 text-sm mt-1">
                {errors.outsourcingType}
              </p>
            )}
          </div>
          <div className="relative z-10">
            <label
              htmlFor="serviceType"
              className="block text-sm font-medium mb-2"
            >
              서비스 유형
            </label>
            <select
              id="serviceType"
              name="serviceType"
              className={`w-full px-4 py-2 bg-gray-700 bg-opacity-50 border ${
                errors.serviceType ? "border-red-500" : "border-gray-600"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              required
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="">선택하세요</option>
              <option value="랜딩페이지">랜딩페이지</option>
              <option value="플랫폼">플랫폼</option>
              <option value="판매서비스">판매서비스</option>
              <option value="커뮤니티">커뮤니티</option>
              <option value="AI 임베딩">AI 임베딩</option>
              <option value="기타">기타</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-400 text-sm mt-1">{errors.serviceType}</p>
            )}
          </div>
          <div className="relative z-10">
            <label htmlFor="inquiry" className="block text-sm font-medium mb-2">
              문의 내용
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              rows={4}
              className={`w-full px-4 py-2 bg-gray-700 bg-opacity-50 border ${
                errors.inquiry ? "border-red-500" : "border-gray-600"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              placeholder="문의 내용을 입력하세요"
              required
              value={formData.inquiry}
              onChange={handleChange}
            ></textarea>
            {errors.inquiry && (
              <p className="text-red-400 text-sm mt-1">{errors.inquiry}</p>
            )}
          </div>
          <div className="relative z-10 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-600 rounded-md shadow-lg hover:bg-gray-700 transition-colors duration-300"
            >
              뒤로
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-medium rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
            >
              제출
            </button>
          </div>
        </>
      )}

      {/* Submission Success Message */}
      {isSubmitted && (
        <p className="mt-4 text-green-400 text-center relative z-10">
          문의가 성공적으로 전송되었습니다!
        </p>
      )}

      {/* 장식 요소 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-20 blur-3xl absolute -top-20 -left-20"></div>
        <div className="w-72 h-72 bg-gradient-to-br from-pink-500 to-orange-500 opacity-20 blur-3xl absolute -bottom-20 -right-20"></div>
      </div>
    </form>
  );
};

export default ContactForm;
