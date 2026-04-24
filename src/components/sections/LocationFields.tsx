"use client";

import { useEffect } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { getDistrictOptions, getDivisionOptions, getUnionOptions, getUpazilaOptions } from "@/lib/location";
import type { VolunteerFormValues } from "@/lib/validations/volunteer";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface LocationFieldsProps {
  prefix: "currentAddress" | "permanentAddress";
  title: string;
  register: UseFormRegister<VolunteerFormValues>;
  watch: UseFormWatch<VolunteerFormValues>;
  setValue: UseFormSetValue<VolunteerFormValues>;
  errors: FieldErrors<VolunteerFormValues>;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-xs text-rose-600">{message}</p>;
}

export default function LocationFields({
  prefix,
  title,
  register,
  watch,
  setValue,
  errors,
}: LocationFieldsProps) {
  const division = watch(`${prefix}.division`);
  const district = watch(`${prefix}.district`);
  const upazila = watch(`${prefix}.upazila`);
  const scopedErrors = (errors[prefix] ?? {}) as Record<string, { message?: string }>;

  const divisionOptions = getDivisionOptions();
  const districtOptions = getDistrictOptions(division);
  const upazilaOptions = getUpazilaOptions(division, district);
  const unionOptions = getUnionOptions(division, district, upazila);

  useEffect(() => {
    setValue(`${prefix}.district`, "");
    setValue(`${prefix}.upazila`, "");
    setValue(`${prefix}.union`, "");
  }, [division, prefix, setValue]);

  useEffect(() => {
    setValue(`${prefix}.upazila`, "");
    setValue(`${prefix}.union`, "");
  }, [district, prefix, setValue]);

  useEffect(() => {
    setValue(`${prefix}.union`, "");
  }, [prefix, setValue, upazila]);

  return (
    <section className="space-y-5 rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">বিভাগ, জেলা, উপজেলা এবং ইউনিয়ন / এলাকা নির্বাচন করুন।</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">বিভাগ</label>
          <Select className="mt-2" defaultValue="" {...register(`${prefix}.division`)}>
            <option value="">বিভাগ নির্বাচন করুন</option>
            {divisionOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <FieldError message={scopedErrors.division?.message} />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">জেলা</label>
          <Select className="mt-2" defaultValue="" disabled={!division} {...register(`${prefix}.district`)}>
            <option value="">জেলা নির্বাচন করুন</option>
            {districtOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <FieldError message={scopedErrors.district?.message} />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">উপজেলা</label>
          <Select className="mt-2" defaultValue="" disabled={!district} {...register(`${prefix}.upazila`)}>
            <option value="">উপজেলা নির্বাচন করুন</option>
            {upazilaOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <FieldError message={scopedErrors.upazila?.message} />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">ইউনিয়ন / এলাকা</label>
          <Select className="mt-2" defaultValue="" disabled={!upazila} {...register(`${prefix}.union`)}>
            <option value="">ইউনিয়ন / এলাকা নির্বাচন করুন</option>
            {unionOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <FieldError message={scopedErrors.union?.message} />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">বিস্তারিত ঠিকানা</label>
        <Input className="mt-2" placeholder="বাসা / সড়ক / গ্রাম / ডাকঘর" {...register(`${prefix}.addressLine`)} />
        <FieldError message={scopedErrors.addressLine?.message} />
      </div>
    </section>
  );
}
