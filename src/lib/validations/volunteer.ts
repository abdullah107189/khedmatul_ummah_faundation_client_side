import { z } from "zod";

const mobilePattern = /^(?:\+?৮৮|88)?01[3-9][০-৯0-9]{8}$/;
const photoTypes = ["image/jpeg", "image/png", "image/heic", "image/heif"];
const currentYear = new Date().getFullYear();

function normalizeDigits(value: string) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";
  return value.replace(/[০-৯]/g, (digit) => String(banglaDigits.indexOf(digit)));
}

function isValidYear(value: string) {
  const normalized = normalizeDigits(value);
  return /^\d{4}$/.test(normalized) && Number(normalized) >= 1970 && Number(normalized) <= currentYear;
}

const addressSchema = z.object({
  division: z.string().min(1, "বিভাগ নির্বাচন করুন"),
  district: z.string().min(1, "জেলা নির্বাচন করুন"),
  upazila: z.string().min(1, "উপজেলা নির্বাচন করুন"),
  union: z.string().min(1, "ইউনিয়ন / এলাকা লিখুন"),
  addressLine: z.string().min(5, "বিস্তারিত ঠিকানা লিখুন"),
});

export const volunteerFormSchema = z
  .object({
    name: z.string().min(2, "নাম লিখুন"),
    fatherName: z.string().min(2, "পিতার নাম লিখুন"),
    phone: z.string().regex(mobilePattern, "সঠিক মোবাইল নম্বর লিখুন"),
    email: z.string().email("সঠিক ইমেইল লিখুন"),
    occupation: z.string().min(2, "বর্তমান পেশা লিখুন"),
    workplaceName: z.string().optional(),
    workplaceAddress: z.string().optional(),
    currentAddress: addressSchema,
    permanentAddress: addressSchema,
    expatriateCountry: z.string().optional(),
    expatriateAddress: z.string().optional(),
    noFacebook: z.boolean().default(false),
    facebookLink: z.string().optional(),
    linkedIn: z.union([z.literal(""), z.string().url("সঠিক লিংক লিখুন")]).optional(),
    whatsapp: z.union([z.literal(""), z.string().regex(mobilePattern, "সঠিক হোয়াটসঅ্যাপ নম্বর লিখুন")]).optional(),
    telegram: z.string().optional(),
    educationMedium: z.string().min(1, "পড়াশোনার মাধ্যম নির্বাচন করুন"),
    educationLevel: z.string().min(1, "শিক্ষার স্তর নির্বাচন করুন"),
    passingYear: z.string().refine(isValidYear, "সঠিক পাসের বছর লিখুন"),
    institutionName: z.string().min(2, "শিক্ষা প্রতিষ্ঠানের নাম লিখুন"),
    department: z.string().optional(),
    hasExperience: z.enum(["yes", "no"]),
    experienceProjectName: z.string().optional(),
    experienceLocation: z.string().optional(),
    experienceYear: z.string().optional(),
    experienceBeneficiaries: z.string().optional(),
    photo: z
      .custom<File | undefined>((value) => value === undefined || value instanceof File, "ছবি নির্বাচন করুন")
      .refine((file) => file !== undefined, "সাম্প্রতিক ছবি আপলোড করুন")
      .refine((file) => (file ? file.size <= 3 * 1024 * 1024 : false), "ছবির সাইজ ৩MB এর মধ্যে হতে হবে")
      .refine((file) => (file ? photoTypes.includes(file.type) : false), "জেপিজি, পিএনজি অথবা এইচইআইসি ফাইল দিন"),
  })
  .superRefine((data, ctx) => {
    if (!data.noFacebook && !data.facebookLink) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["facebookLink"],
        message: "ফেসবুক প্রোফাইল লিংক দিন অথবা ব্যবহার করি না নির্বাচন করুন",
      });
    }

    if (!data.noFacebook && data.facebookLink) {
      const parsed = z.string().url("সঠিক ফেসবুক লিংক লিখুন").safeParse(data.facebookLink);
      if (!parsed.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["facebookLink"],
          message: "সঠিক ফেসবুক লিংক লিখুন",
        });
      }
    }

    if (data.hasExperience === "yes") {
      if (!data.experienceProjectName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["experienceProjectName"],
          message: "প্রকল্পের নাম লিখুন",
        });
      }

      if (!data.experienceLocation) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["experienceLocation"],
          message: "প্রকল্পের স্থান লিখুন",
        });
      }

      if (!data.experienceYear || !isValidYear(data.experienceYear)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["experienceYear"],
          message: "সঠিক বছর লিখুন",
        });
      }

      if (!data.experienceBeneficiaries) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["experienceBeneficiaries"],
          message: "কতজন উপকৃত হয়েছে লিখুন",
        });
      }
    }
  });

export type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

