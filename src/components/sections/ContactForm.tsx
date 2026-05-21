"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Loader2 } from "lucide-react";
import { useState } from "react";
import { ContactFormGlow } from "@/components/sections/ContactFormGlow";
import {
  hasContactFieldErrors,
  submitToWeb3Forms,
  validateContactFields,
  type ContactField,
  type ContactFieldErrors,
} from "@/lib/web3forms";
import { budgetOptions, needOptions } from "@/lib/site";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass = (hasError: boolean) =>
  `w-full rounded-lg border bg-[#0a0a0c]/90 px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition focus:outline-none focus:ring-1 disabled:opacity-50 ${
    hasError
      ? "border-red-400/50 focus:border-red-400/60 focus:ring-red-400/20"
      : "border-white/[0.07] focus:border-[#ff4d00]/40 focus:ring-[#ff4d00]/15"
  }`;

export function ContactForm() {
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  function clearFieldError(field: ContactField) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      need: need.trim(),
      budget: budget ?? "",
      message: String(formData.get("message") ?? "").trim(),
    };

    const errors = validateContactFields(payload);
    if (hasContactFieldErrors(errors)) {
      setFieldErrors(errors);
      setStatus("error");
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setFieldErrors({});
    setStatus("loading");

    try {
      await submitToWeb3Forms(payload);
      setStatus("success");
      form.reset();
      setNeed("");
      setBudget(null);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  return (
    <ContactFormGlow>
      <form onSubmit={handleSubmit} noValidate className="space-y-4 p-4 sm:space-y-5 sm:p-6 md:p-8">
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12 text-center"
          >
            <p className="text-base font-medium text-white">
              Message sent successfully
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Thanks — we&apos;ll be in touch within one business day.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFieldErrors({});
                setSubmitError(null);
              }}
              className="mt-6 text-sm text-[#ff4d00] hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <Field
                label="Name"
                name="name"
                placeholder="Your name"
                required
                disabled={status === "loading"}
                error={fieldErrors.name}
                onChange={() => clearFieldError("name")}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                disabled={status === "loading"}
                error={fieldErrors.email}
                onChange={() => clearFieldError("email")}
              />
              <Field
                label="Company (Optional)"
                name="company"
                placeholder="Company name"
                disabled={status === "loading"}
                error={fieldErrors.company}
                onChange={() => clearFieldError("company")}
              />
              <NeedSelect
                value={need}
                disabled={status === "loading"}
                error={fieldErrors.need}
                onChange={(v) => {
                  setNeed(v);
                  clearFieldError("need");
                }}
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-zinc-300">
                Budget Range
                <span className="ml-1 text-[#ff4d00]">*</span>
              </label>
              <div
                className={`grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-2.5 ${
                  fieldErrors.budget
                    ? "rounded-xl p-2 ring-1 ring-inset ring-red-400/40"
                    : ""
                }`}
                role="radiogroup"
                aria-label="Budget range"
                aria-invalid={fieldErrors.budget ? true : undefined}
                aria-describedby={
                  fieldErrors.budget ? "budget-error" : undefined
                }
              >
                {budgetOptions.map((option) => {
                  const selected = budget === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={status === "loading"}
                      role="radio"
                      aria-checked={selected}
                      onClick={() => {
                        setBudget(option);
                        clearFieldError("budget");
                      }}
                      className={`flex items-center gap-2.5 rounded-full border px-3.5 py-2 text-left text-xs transition disabled:opacity-50 sm:text-sm ${
                        selected
                          ? "border-[#ff4d00]/50 bg-[#ff4d00]/[0.08] text-white"
                          : "border-white/[0.08] bg-[#0a0a0c]/60 text-zinc-400 hover:border-white/15"
                      }`}
                    >
                      <span
                        className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border transition ${
                          selected
                            ? "border-[#ff4d00] bg-[#ff4d00]"
                            : "border-zinc-600 bg-transparent"
                        }`}
                      >
                        {selected && (
                          <span className="h-1.5 w-1.5 rounded-full bg-black" />
                        )}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
              <FieldError id="budget-error" message={fieldErrors.budget} />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Tell us about your project
                <span className="ml-1 text-[#ff4d00]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                disabled={status === "loading"}
                placeholder="Tell us about your project..."
                aria-invalid={fieldErrors.message ? true : undefined}
                aria-describedby={
                  fieldErrors.message ? "message-error" : undefined
                }
                onChange={() => clearFieldError("message")}
                className={`${inputClass(Boolean(fieldErrors.message))} resize-y min-h-[120px]`}
              />
              <FieldError id="message-error" message={fieldErrors.message} />
            </div>

            {submitError && (
              <p className="text-sm text-red-400" role="alert">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-neon flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Start a conversation
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </>
              )}
            </button>
          </>
        )}
      </form>
    </ContactFormGlow>
  );
}

function NeedSelect({
  value,
  disabled,
  error,
  onChange,
}: {
  value: string;
  disabled?: boolean;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor="need"
        className="mb-2 block text-sm font-medium text-zinc-300"
      >
        What do you need help with?
        <span className="ml-1 text-[#ff4d00]">*</span>
      </label>
      <div className="relative">
        <select
          id="need"
          value={value}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "need-error" : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass(Boolean(error))} appearance-none pr-10 ${
            !value ? "text-zinc-600" : ""
          }`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {needOptions.map((option) => (
            <option key={option} value={option} className="bg-[#0a0a0c] text-white">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-zinc-500"
          aria-hidden
        />
      </div>
      <FieldError id="need-error" message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-red-400" role="alert">
      {message}
    </p>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  disabled,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: () => void;
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-zinc-300"
      >
        {label}
        {required && <span className="ml-1 text-[#ff4d00]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={onChange}
        className={inputClass(Boolean(error))}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}
