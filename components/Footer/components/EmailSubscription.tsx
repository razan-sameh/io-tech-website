"use client";

import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FaExclamationCircle } from "react-icons/fa";
import { useCreateSubscriber } from "@/lib/hooks/useSubscriber";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function EmailSubscription() {
  const mutation = useCreateSubscriber();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: toFormikValidationSchema(emailSchema),
    onSubmit: (values, { resetForm }) => {
      mutation.mutate(values, {
        onSuccess: () => {
          resetForm();
          alert("Subscribed successfully!");
        },
        onError: (error) => {
            console.log({error});
            
          alert("Something went wrong. Please try again.");
        },
      });
    },
  });

  const hasError = formik.touched.email && !!formik.errors.email;

  return (
    <form onSubmit={formik.handleSubmit} className="w-full md:w-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 bg-white rounded-md p-2 md:p-0">
        <div className="relative w-full md:w-auto flex-1">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`px-4 py-2 rounded-md text-black text-sm focus:outline-none w-full ${
              hasError ? "border border-red-500 m-2 transition" : ""
            }`}
          />
          {hasError && (
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <FaExclamationCircle className="text-red-500" size={16} />
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-primary text-white m-2 px-4 md:px-6 py-2 rounded-md text-sm hover:bg-[#2D1807] transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {mutation.isPending ? "Submitting..." : "Subscribe"}
        </button>
      </div>
      {hasError && (
        <p className="mt-1 text-sm text-red-500 flex items-center gap-1 animate-fadeIn">
          <FaExclamationCircle size={14} />
          {formik.errors.email}
        </p>
      )}
    </form>
  );
}
