"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputField,
  SelectField,
  TextareaField,
} from "@/components/ui/form-controls";

type FormState = {
  name: string;
  wowClass: string;
  role: string;
  experience: string;
  availability: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  wowClass: "",
  role: "",
  experience: "",
  availability: "",
  message: "",
};

export function ApplyForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [touched, setTouched] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Bitte gib einen gültigen Namen an.";
    if (!form.wowClass) next.wowClass = "Bitte wähle eine Klasse.";
    if (!form.role) next.role = "Bitte wähle eine Rolle.";
    if (!form.experience) next.experience = "Bitte gib deinen Erfahrungsstand an.";
    if (!form.availability)
      next.availability = "Bitte gib deine Verfügbarkeit an.";
    if (form.message.trim().length < 20)
      next.message = "Bitte schreib mindestens 20 Zeichen.";
    return next;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);

    if (hasErrors) return;

    setSuccess("Bewerbung erfolgreich gesendet (Mock). Wir melden uns zeitnah.");
    setForm(initialState);
    setTouched(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-xl border border-[#39B6FF]/25 bg-[#0B1020]/75 p-6"
      aria-describedby="application-hint"
    >
      <p id="application-hint" className="text-sm text-[#AAB4D6]">
        Dieses Formular ist ein Client-Mock. Es erfolgt kein Server-Submit.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <InputField
            id="name"
            label="Name / Charakter"
            placeholder="z.B. Arcanis"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            aria-invalid={Boolean(touched && errors.name)}
          />
          {touched && errors.name ? (
            <p className="mt-2 text-xs text-rose-300">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <SelectField
            id="class"
            label="Klasse"
            value={form.wowClass}
            onChange={(event) => updateField("wowClass", event.target.value)}
            required
            aria-invalid={Boolean(touched && errors.wowClass)}
          >
            <option value="">Bitte wählen</option>
            <option value="Warrior">Warrior</option>
            <option value="Paladin">Paladin</option>
            <option value="Hunter">Hunter</option>
            <option value="Rogue">Rogue</option>
            <option value="Priest">Priest</option>
            <option value="Shaman">Shaman</option>
            <option value="Mage">Mage</option>
            <option value="Warlock">Warlock</option>
            <option value="Druid">Druid</option>
          </SelectField>
          {touched && errors.wowClass ? (
            <p className="mt-2 text-xs text-rose-300">{errors.wowClass}</p>
          ) : null}
        </div>

        <div>
          <SelectField
            id="role"
            label="Rolle"
            value={form.role}
            onChange={(event) => updateField("role", event.target.value)}
            required
            aria-invalid={Boolean(touched && errors.role)}
          >
            <option value="">Bitte wählen</option>
            <option value="Tank">Tank</option>
            <option value="Healer">Healer</option>
            <option value="DPS">DPS</option>
          </SelectField>
          {touched && errors.role ? (
            <p className="mt-2 text-xs text-rose-300">{errors.role}</p>
          ) : null}
        </div>

        <div>
          <InputField
            id="experience"
            label="Erfahrung"
            placeholder="z.B. TBC-Progress seit Phase 1"
            value={form.experience}
            onChange={(event) => updateField("experience", event.target.value)}
            required
            aria-invalid={Boolean(touched && errors.experience)}
          />
          {touched && errors.experience ? (
            <p className="mt-2 text-xs text-rose-300">{errors.experience}</p>
          ) : null}
        </div>
      </div>

      <div>
        <InputField
          id="availability"
          label="Verfügbarkeit"
          placeholder="z.B. Sonntag 18:00-22:00"
          value={form.availability}
          onChange={(event) => updateField("availability", event.target.value)}
          required
          aria-invalid={Boolean(touched && errors.availability)}
        />
        {touched && errors.availability ? (
          <p className="mt-2 text-xs text-rose-300">{errors.availability}</p>
        ) : null}
      </div>

      <div>
        <TextareaField
          id="message"
          label="Nachricht"
          placeholder="Erzähl uns kurz etwas über deinen Spielstil, Ziele und Motivation."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          aria-invalid={Boolean(touched && errors.message)}
        />
        {touched && errors.message ? (
          <p className="mt-2 text-xs text-rose-300">{errors.message}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Bewerbung absenden</Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setForm(initialState);
            setTouched(false);
            setSuccess(null);
          }}
        >
          Zurücksetzen
        </Button>
      </div>

      {success ? (
        <p
          role="status"
          className="rounded-md border border-emerald-400/35 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
        >
          {success}
        </p>
      ) : null}
    </form>
  );
}
