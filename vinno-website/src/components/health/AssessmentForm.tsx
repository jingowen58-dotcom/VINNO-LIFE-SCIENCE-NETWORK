"use client";

import { useState } from "react";
import Link from "next/link";
import { getV2 } from "@/content/v2";
import type { Locale } from "@/content/types";

type Species = "dog" | "cat" | "other";
type Choice = "yes" | "no" | "unknown";

const empty = {
  species: "dog" as Species,
  breed: "",
  age: "",
  weight: "",
  sex: "unknown" as "female" | "male" | "unknown",
  neutered: "unknown" as Choice,
  diet: "",
  activity: "",
  environment: "",
  concerns: [] as string[],
  history: "",
  medications: "no" as "yes" | "no",
  medicationDetail: "",
  symptoms: "no" as "yes" | "no",
  symptomDetail: "",
  allergies: "",
  exam: "",
};

export function AssessmentForm({ locale }: { locale: Locale }) {
  const copy = getV2(locale).assessment;
  const [form, setForm] = useState(empty);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof typeof empty>(key: K, value: (typeof empty)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setSubmitted(false);
  }

  function toggleConcern(id: string) {
    setForm((current) => ({
      ...current,
      concerns: current.concerns.includes(id) ? current.concerns.filter((item) => item !== id) : [...current.concerns, id],
    }));
    setSubmitted(false);
  }

  const missing = [
    !form.breed ? copy.fields.breed : "",
    !form.age ? copy.fields.age : "",
    !form.weight ? copy.fields.weight : "",
    !form.diet ? copy.fields.diet : "",
    !form.exam ? copy.fields.exam : "",
  ].filter(Boolean);

  const vetGate = form.symptoms === "yes" || form.medications === "yes";
  const concernLabels = copy.concernOptions.filter((item) => form.concerns.includes(item.id)).map((item) => item.label);
  const directionSlugs = vetGate
    ? []
    : [
        ...(form.concerns.includes("digestion") ? ["senior-probiotic"] : []),
        ...(form.concerns.includes("joints") || form.concerns.includes("weight") ? ["joint-support"] : []),
        ...(form.concerns.includes("nutrition") || form.concerns.length === 0 ? ["complete-nutrition"] : []),
      ];

  const provided = [
    `${copy.fields.species}: ${copy.species[form.species]}`,
    form.breed ? `${copy.fields.breed}: ${form.breed}` : "",
    form.age ? `${copy.fields.age}: ${form.age}` : "",
    form.weight ? `${copy.fields.weight}: ${form.weight}` : "",
    `${copy.fields.sex}: ${copy.sex[form.sex]}`,
    concernLabels.length ? `${copy.sections.concerns}: ${concernLabels.join(", ")}` : "",
    form.history ? `${copy.fields.history}: ${form.history}` : "",
    form.allergies ? `${copy.fields.allergies}: ${form.allergies}` : "",
  ].filter(Boolean);

  return (
    <form
      className="max-w-3xl"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <p className="border-l border-[var(--color-secondary)] pl-4 text-sm leading-6 text-[var(--color-text-primary)]">{copy.notSaved}</p>
      <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{copy.notDiagnosis}</p>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.profile}</legend>
        <ChoiceField label={copy.fields.species} value={form.species} onChange={(value) => update("species", value as Species)} options={[["dog", copy.species.dog], ["cat", copy.species.cat], ["other", copy.species.other]]} />
        <TextField label={copy.fields.breed} value={form.breed} onChange={(value) => update("breed", value)} />
        <TextField label={copy.fields.age} value={form.age} onChange={(value) => update("age", value)} />
        <TextField label={copy.fields.weight} value={form.weight} onChange={(value) => update("weight", value)} />
        <ChoiceField label={copy.fields.sex} value={form.sex} onChange={(value) => update("sex", value as typeof form.sex)} options={[["female", copy.sex.female], ["male", copy.sex.male], ["unknown", copy.sex.unknown]]} />
        <ChoiceField label={copy.fields.neutered} value={form.neutered} onChange={(value) => update("neutered", value as Choice)} options={[["yes", copy.yes], ["no", copy.no], ["unknown", copy.unknown]]} />
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.life}</legend>
        <TextField label={copy.fields.diet} value={form.diet} onChange={(value) => update("diet", value)} />
        <TextField label={copy.fields.activity} value={form.activity} onChange={(value) => update("activity", value)} />
        <TextField label={copy.fields.environment} value={form.environment} onChange={(value) => update("environment", value)} />
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-lg">{copy.sections.concerns}</legend>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {copy.concernOptions.map((item) => (
            <label key={item.id} className="surface flex items-center gap-3 px-4 py-3 text-sm">
              <input type="checkbox" checked={form.concerns.includes(item.id)} onChange={() => toggleConcern(item.id)} />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.health}</legend>
        <TextField label={copy.fields.history} value={form.history} onChange={(value) => update("history", value)} />
        <ChoiceField label={copy.fields.medications} value={form.medications} onChange={(value) => update("medications", value as "yes" | "no")} options={[["no", copy.no], ["yes", copy.yes]]} />
        {form.medications === "yes" ? <TextField label={copy.fields.medicationDetail} value={form.medicationDetail} onChange={(value) => update("medicationDetail", value)} /> : null}
        <ChoiceField label={copy.fields.symptoms} value={form.symptoms} onChange={(value) => update("symptoms", value as "yes" | "no")} options={[["no", copy.no], ["yes", copy.yes]]} />
        {form.symptoms === "yes" ? <TextField label={copy.fields.symptomDetail} value={form.symptomDetail} onChange={(value) => update("symptomDetail", value)} /> : null}
        <TextField label={copy.fields.allergies} value={form.allergies} onChange={(value) => update("allergies", value)} />
        <TextField label={copy.fields.exam} value={form.exam} onChange={(value) => update("exam", value)} />
      </fieldset>

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="submit" className="inline-flex min-h-11 items-center rounded-[10px] bg-[var(--color-primary)] px-5 text-sm font-medium text-[var(--color-bg)]">
          {copy.submit}
        </button>
        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-[10px] border border-[var(--color-border)] px-5 text-sm"
          onClick={() => {
            setForm(empty);
            setSubmitted(false);
          }}
        >
          {copy.reset}
        </button>
      </div>

      {submitted ? (
        <section className="surface mt-8 p-6" aria-live="polite">
          <h2 className="text-2xl">{copy.summaryTitle}</h2>
          {form.species === "cat" ? <p className="mt-3 text-sm leading-6">{copy.catNote}</p> : null}
          {form.species === "other" ? <p className="mt-3 text-sm leading-6">{copy.otherNote}</p> : null}
          <h3 className="mt-5 text-sm tracking-[0.14em] text-[var(--color-primary)]">{copy.provided}</h3>
          <ul className="mt-2 space-y-1">
            {provided.map((item) => (
              <li key={item} className="text-sm leading-6">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="mt-5 text-sm tracking-[0.14em] text-[var(--color-primary)]">{copy.missing}</h3>
          <ul className="mt-2 space-y-1">
            {(missing.length ? missing : [locale === "zh" ? "主要栏位已填写。体重、饮食和检查仍建议与兽医记录核对。" : "The main fields are filled. Weight, diet, and exams should still be checked against a veterinary record."]).map((item) => (
              <li key={item} className="text-sm leading-6 text-[var(--color-text-secondary)]">
                {item}
              </li>
            ))}
          </ul>
          {vetGate ? (
            <div className="mt-6 border-l border-[var(--color-secondary)] pl-4">
              <h3 className="text-lg">{copy.vetTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{copy.vetBody}</p>
            </div>
          ) : (
            <div className="mt-6">
              <h3 className="text-lg">{copy.directionsTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{copy.directionsNote}</p>
              <ul className="mt-3 space-y-2">
                {directionSlugs.map((slug) => (
                  <li key={slug}>
                    <Link href={`/${locale}/products/${slug}/`} className="text-sm text-[var(--color-primary)] underline underline-offset-4">
                      {getV2(locale).products.find((item) => item.slug === slug)?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ) : null}
    </form>
  );
}

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block text-sm">
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded-[10px] border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-3 text-[var(--color-text-primary)]" />
    </label>
  );
}

function ChoiceField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: [string, string][];
}) {
  return (
    <fieldset>
      <legend className="text-sm">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map(([id, text]) => (
          <label key={id} className="surface flex items-center gap-2 px-3 py-2 text-sm">
            <input type="radio" name={label} checked={value === id} onChange={() => onChange(id)} />
            {text}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
