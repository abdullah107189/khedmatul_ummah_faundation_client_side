"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import LocationFields from "@/components/sections/LocationFields";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { VOLUNTEER_BENEFITS } from "@/data/site";
import { volunteerFormSchema, type VolunteerFormValues } from "@/lib/validations/volunteer";

const educationMedia = ["জেনারেল", "মাদরাসা", "আলিয়া", "কারিগরি", "অন্যান্য"];
const educationLevels = ["এসএসসি / দাখিল", "এইচএসসি / আলিম", "স্নাতক", "স্নাতকোত্তর", "অন্যান্য"];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-xs text-rose-600">{message}</p>;
}

function SectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5 rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function VolunteerRegistrationForm() {
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      name: "",
      fatherName: "",
      phone: "",
      email: "",
      occupation: "",
      workplaceName: "",
      workplaceAddress: "",
      currentAddress: {
        division: "",
        district: "",
        upazila: "",
        union: "",
        addressLine: "",
      },
      permanentAddress: {
        division: "",
        district: "",
        upazila: "",
        union: "",
        addressLine: "",
      },
      expatriateCountry: "",
      expatriateAddress: "",
      noFacebook: false,
      facebookLink: "",
      linkedIn: "",
      whatsapp: "",
      telegram: "",
      educationMedium: "",
      educationLevel: "",
      passingYear: "",
      institutionName: "",
      department: "",
      hasExperience: "no",
      experienceProjectName: "",
      experienceLocation: "",
      experienceYear: "",
      experienceBeneficiaries: "",
      photo: undefined,
    },
  });

  const noFacebook = useWatch({ control, name: "noFacebook" });
  const hasExperience = useWatch({ control, name: "hasExperience" });
  const uploadedPhoto = useWatch({ control, name: "photo" });

  useEffect(() => {
    register("photo");
  }, [register]);

  useEffect(() => {
    if (noFacebook) {
      setValue("facebookLink", "");
    }
  }, [noFacebook, setValue]);

  const onSubmit = async (values: VolunteerFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmittedName(values.name);
    reset();
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-5 rounded-[1.75rem] border border-emerald-100 bg-[linear-gradient(180deg,_rgba(240,253,244,0.96),_rgba(255,251,235,0.9))] p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">স্বেচ্ছাসেবক হিসেবে যুক্ত হোন</h2>
          <p className="text-sm leading-7 text-slate-700">
            এই ফর্মটি ভবিষ্যতের স্বেচ্ছাসেবক ব্যবস্থাপনা ব্যবস্থার জন্য গঠনমূলক তথ্য প্রস্তুত করে। বর্তমানে
            এটি নমুনা জমা প্রক্রিয়া হিসেবে রাখা হয়েছে।
          </p>
          <div className="space-y-3">
            {VOLUNTEER_BENEFITS.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-2xl bg-white/80 p-4 text-sm text-slate-700">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
          {submittedName ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
              {submittedName} এর তথ্য সফলভাবে গ্রহণ করা হয়েছে।
            </div>
          ) : null}
        </aside>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <SectionCard title="ব্যক্তিগত তথ্য" description="যে তথ্যগুলো বাধ্যতামূলক, সেগুলো অবশ্যই পূরণ করুন।">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">নাম</label>
                <Input className="mt-2" {...register("name")} />
                <FieldError message={errors.name?.message} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">পিতার নাম</label>
                <Input className="mt-2" {...register("fatherName")} />
                <FieldError message={errors.fatherName?.message} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">মোবাইল নম্বর</label>
                <Input className="mt-2" placeholder="০১XXXXXXXXX" {...register("phone")} />
                <FieldError message={errors.phone?.message} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">ইমেইল</label>
                <Input className="mt-2" type="email" placeholder="আপনার ইমেইল ঠিকানা" {...register("email")} />
                <FieldError message={errors.email?.message} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">বর্তমান পেশা</label>
                <Input className="mt-2" {...register("occupation")} />
                <FieldError message={errors.occupation?.message} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">কর্মস্থলের নাম</label>
                <Input className="mt-2" {...register("workplaceName")} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">কর্মস্থলের ঠিকানা</label>
              <Textarea className="mt-2 min-h-24" {...register("workplaceAddress")} />
            </div>
          </SectionCard>

          <LocationFields
            prefix="currentAddress"
            title="বর্তমান ঠিকানা"
            register={register}
            watch={watch}
            setValue={setValue}
            errors={errors}
          />

          <LocationFields
            prefix="permanentAddress"
            title="স্থায়ী ঠিকানা"
            register={register}
            watch={watch}
            setValue={setValue}
            errors={errors}
          />

          <SectionCard title="প্রবাসী তথ্য (ঐচ্ছিক)" description="আপনি দেশের বাইরে থাকলে এই অংশ পূরণ করুন।">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">দেশ</label>
                <Input className="mt-2" {...register("expatriateCountry")} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">বিস্তারিত ঠিকানা</label>
                <Input className="mt-2" {...register("expatriateAddress")} />
              </div>
            </div>
          </SectionCard>

          <SectionCard title="সামাজিক যোগাযোগমাধ্যম" description="কমপক্ষে ফেসবুক লিংক অথবা ব্যবহার করি না নির্বাচন করুন।">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-700">ফেসবুক প্রোফাইল লিংক</label>
                <Input
                  className="mt-2"
                  placeholder="ফেসবুক প্রোফাইলের লিংক"
                  disabled={noFacebook}
                  {...register("facebookLink")}
                />
                <FieldError message={errors.facebookLink?.message} />
              </div>

              <label className="flex items-center gap-3 rounded-2xl border border-emerald-100 px-4 py-3 text-sm text-slate-700">
                <input type="checkbox" className="h-4 w-4 accent-emerald-600" {...register("noFacebook")} />
                আমি ফেসবুক ব্যবহার করি না
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">লিংকডইন</label>
                  <Input className="mt-2" placeholder="লিংকডইন প্রোফাইলের লিংক" {...register("linkedIn")} />
                  <FieldError message={errors.linkedIn?.message} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">হোয়াটসঅ্যাপ</label>
                  <Input className="mt-2" placeholder="০১XXXXXXXXX" {...register("whatsapp")} />
                  <FieldError message={errors.whatsapp?.message} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">টেলিগ্রাম</label>
                <Input className="mt-2" placeholder="টেলিগ্রাম ব্যবহারকারীর নাম" {...register("telegram")} />
              </div>
            </div>
          </SectionCard>

          <SectionCard title="শিক্ষাগত তথ্য">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">কোন মাধ্যমে পড়াশোনা করেছেন</label>
                <Select className="mt-2" defaultValue="" {...register("educationMedium")}>
                  <option value="">মাধ্যম নির্বাচন করুন</option>
                  {educationMedia.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                <FieldError message={errors.educationMedium?.message} />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">শিক্ষার স্তর</label>
                <Select className="mt-2" defaultValue="" {...register("educationLevel")}>
                  <option value="">স্তর নির্বাচন করুন</option>
                  {educationLevels.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                <FieldError message={errors.educationLevel?.message} />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">সর্বশেষ পাসের বছর</label>
                <Input className="mt-2" placeholder="২০২৪" {...register("passingYear")} />
                <FieldError message={errors.passingYear?.message} />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">শিক্ষা প্রতিষ্ঠানের নাম</label>
                <Input className="mt-2" {...register("institutionName")} />
                <FieldError message={errors.institutionName?.message} />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">বিভাগ / ডিগ্রি</label>
              <Input className="mt-2" {...register("department")} />
            </div>
          </SectionCard>

          <SectionCard title="অভিজ্ঞতা">
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-700">আগে স্বেচ্ছাসেবক ছিলেন?</p>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-3 rounded-2xl border border-emerald-100 px-4 py-3 text-sm text-slate-700">
                  <input type="radio" value="yes" className="accent-emerald-600" {...register("hasExperience")} />
                  হ্যাঁ
                </label>
                <label className="flex items-center gap-3 rounded-2xl border border-emerald-100 px-4 py-3 text-sm text-slate-700">
                  <input type="radio" value="no" className="accent-emerald-600" {...register("hasExperience")} />
                  না
                </label>
              </div>
            </div>

            {hasExperience === "yes" ? (
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">প্রকল্পের নাম</label>
                  <Input className="mt-2" {...register("experienceProjectName")} />
                  <FieldError message={errors.experienceProjectName?.message} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">প্রকল্পের স্থান</label>
                  <Input className="mt-2" {...register("experienceLocation")} />
                  <FieldError message={errors.experienceLocation?.message} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">বছর</label>
                  <Input className="mt-2" placeholder="২০২৩" {...register("experienceYear")} />
                  <FieldError message={errors.experienceYear?.message} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">কতজন উপকৃত হয়েছে</label>
                  <Input className="mt-2" {...register("experienceBeneficiaries")} />
                  <FieldError message={errors.experienceBeneficiaries?.message} />
                </div>
              </div>
            ) : null}
          </SectionCard>

          <SectionCard title="সাম্প্রতিক ছবি আপলোড" description="জেপিজি / পিএনজি / এইচইআইসি, সর্বোচ্চ ৩ মেগাবাইট।">
            <div>
              <label className="text-sm font-medium text-slate-700">ছবি</label>
              <Input
                className="mt-2 h-auto py-3 file:mr-4 file:rounded-full file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
                type="file"
                accept=".jpg,.jpeg,.png,.heic,.heif"
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? undefined;
                  setValue("photo", file as VolunteerFormValues["photo"], {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
              />
              <FieldError message={errors.photo?.message} />
              {uploadedPhoto ? <p className="mt-3 text-sm text-slate-600">নির্বাচিত ফাইল: {uploadedPhoto.name}</p> : null}
            </div>
          </SectionCard>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "জমা দেওয়া হচ্ছে..." : "রেজিস্ট্রেশন জমা দিন"}
            </Button>
            <p className="text-sm text-slate-500">ফর্ম জমা দেওয়ার পর ভবিষ্যতে সার্ভারভিত্তিক সংযোগ যুক্ত করা যাবে।</p>
          </div>
        </form>
      </div>
    </div>
  );
}
