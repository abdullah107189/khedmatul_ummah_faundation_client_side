"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const signupSchema = z.object({
  name: z.string().min(2, "নাম দিতে হবে"),
  email: z.string().email("সঠিক ইমেইল দিন"),
  password: z.string().min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে")
});

type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const { signup, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupForm>({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: SignupForm) => signup(data);

  return (
    <section className="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold">নতুন অ্যাকাউন্ট</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input placeholder="পূর্ণ নাম" {...register("name")} />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <Input placeholder="ইমেইল" {...register("email")} />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <Input type="password" placeholder="পাসওয়ার্ড" {...register("password")} />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "সাইন আপ করুন"}
        </Button>
      </form>
    </section>
  );
}
