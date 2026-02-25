import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FieldWrapperProps = {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
};

function FieldWrapper({ label, htmlFor, hint, children }: FieldWrapperProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold tracking-wide text-[#EAF0FF]"
      >
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs text-[#AAB4D6]">{hint}</p> : null}
    </div>
  );
}

const inputBaseClasses =
  "w-full rounded-md border border-[#39B6FF]/30 bg-[#070A12]/80 px-4 py-2.5 text-sm text-[#EAF0FF] placeholder:text-[#7F8AB2] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B6FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12]";

type InputFieldProps = {
  label: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputField({ label, hint, id, ...props }: InputFieldProps) {
  if (!id) {
    throw new Error("InputField requires an id.");
  }

  return (
    <FieldWrapper label={label} htmlFor={id} hint={hint}>
      <input id={id} className={inputBaseClasses} {...props} />
    </FieldWrapper>
  );
}

type SelectFieldProps = {
  label: string;
  hint?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField({ label, hint, id, children, ...props }: SelectFieldProps) {
  if (!id) {
    throw new Error("SelectField requires an id.");
  }

  return (
    <FieldWrapper label={label} htmlFor={id} hint={hint}>
      <select id={id} className={inputBaseClasses} {...props}>
        {children}
      </select>
    </FieldWrapper>
  );
}

type TextareaFieldProps = {
  label: string;
  hint?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextareaField({
  label,
  hint,
  id,
  ...props
}: TextareaFieldProps) {
  if (!id) {
    throw new Error("TextareaField requires an id.");
  }

  return (
    <FieldWrapper label={label} htmlFor={id} hint={hint}>
      <textarea id={id} className={`${inputBaseClasses} min-h-32`} {...props} />
    </FieldWrapper>
  );
}
