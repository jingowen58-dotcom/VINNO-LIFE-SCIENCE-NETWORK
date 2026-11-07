"use client";

import { useState } from "react";
import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { getV2, type ProductSlug } from "@/content/v2";
import type { Locale } from "@/content/types";

type Species = "dog" | "cat";
type YesNo = "yes" | "no";

const empty = {
  name: "",
  species: "dog" as Species,
  age: "",
  weight: "",
  body: "",
  food: "",
  habits: [] as string[],
  habitNote: "",
  activity: "",
  activityNote: "",
  stool: "",
  water: "",
  observationNote: "",
  concerns: [] as string[],
  concernNote: "",
  symptoms: "no" as YesNo,
  medications: "no" as YesNo,
};

export function AssessmentForm({ locale }: { locale: Locale }) {
  const copy = getV2(locale).assessment;
  const products = getV2(locale).products;
  const [form, setForm] = useState(empty);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof typeof empty>(key: K, value: (typeof empty)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setSubmitted(false);
  }

  function toggle(key: "habits" | "concerns", id: string) {
    setForm((current) => ({
      ...current,
      [key]: current[key].includes(id) ? current[key].filter((item) => item !== id) : [...current[key], id],
    }));
    setSubmitted(false);
  }

  function labelOf(options: { id: string; label: string }[], id: string) {
    return options.find((item) => item.id === id)?.label ?? "";
  }

  function labelsOf(options: { id: string; label: string }[], ids: string[]) {
    return options.filter((item) => ids.includes(item.id)).map((item) => item.label);
  }

  const sep = locale === "zh" ? "：" : ": ";
  const joiner = locale === "zh" ? "、" : ", ";
  const habitLabels = labelsOf(copy.habitOptions, form.habits);
  const concernLabels = labelsOf(copy.concernOptions, form.concerns);
  const bodyLabel = labelOf(copy.bodyOptions, form.body);
  const activityLabel = labelOf(copy.activityOptions, form.activity);
  const stoolLabel = labelOf(copy.stoolOptions, form.stool);
  const waterLabel = labelOf(copy.waterOptions, form.water);
  const vetGate = form.symptoms === "yes" || form.medications === "yes";
  const productSlugs: ProductSlug[] = vetGate
    ? []
    : [
        ...(form.concerns.includes("digestion") ? (["senior-probiotic"] as const) : []),
        ...(form.concerns.includes("joints") || form.concerns.includes("weight") ? (["joint-support"] as const) : []),
        ...(form.concerns.includes("nutrition") || form.concerns.length === 0 ? (["complete-nutrition"] as const) : []),
      ];
  const relatedProducts = productSlugs
    .map((slug) => products.find((item) => item.slug === slug))
    .filter((item): item is (typeof products)[number] => Boolean(item));

  const missing = [
    !form.name ? copy.fields.name : "",
    !form.age ? copy.fields.age : "",
    !form.weight ? copy.fields.weight : "",
    !form.body ? copy.fields.body : "",
    !form.food ? copy.fields.food : "",
    form.habits.length === 0 ? copy.fields.habit : "",
    !form.activity ? copy.fields.activity : "",
    !form.stool ? copy.fields.stool : "",
    !form.water ? copy.fields.water : "",
    form.concerns.length === 0 && !form.concernNote ? copy.fields.concern : "",
  ].filter(Boolean);

  const sections = [
    {
      title: copy.paragraphs.who,
      lines: [form.name ? `${copy.fields.name}${sep}${form.name}` : "", `${copy.fields.species}${sep}${copy.species[form.species]}`],
    },
    {
      title: copy.paragraphs.body,
      lines: [
        form.age ? `${copy.fields.age}${sep}${form.age}` : "",
        form.weight ? `${copy.fields.weight}${sep}${form.weight}` : "",
        bodyLabel ? `${copy.fields.body}${sep}${bodyLabel}` : "",
      ],
    },
    {
      title: copy.paragraphs.diet,
      lines: [form.food ? `${copy.fields.food}${sep}${form.food}` : "", habitLabels.length ? `${copy.fields.habit}${sep}${habitLabels.join(joiner)}` : "", form.habitNote ? `${copy.fields.habitNote}${sep}${form.habitNote}` : ""],
    },
    {
      title: copy.paragraphs.activity,
      lines: [activityLabel ? `${copy.fields.activity}${sep}${activityLabel}` : "", form.activityNote ? `${copy.fields.activityNote}${sep}${form.activityNote}` : ""],
    },
    {
      title: copy.paragraphs.observation,
      lines: [stoolLabel ? `${copy.fields.stool}${sep}${stoolLabel}` : "", waterLabel ? `${copy.fields.water}${sep}${waterLabel}` : "", form.observationNote ? `${copy.fields.observationNote}${sep}${form.observationNote}` : ""],
    },
    {
      title: copy.paragraphs.concern,
      lines: [concernLabels.length ? `${copy.fields.concern}${sep}${concernLabels.join(joiner)}` : "", form.concernNote ? `${copy.fields.concernNote}${sep}${form.concernNote}` : ""],
    },
  ];

  return (
    <form
      className="max-w-3xl"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        window.requestAnimationFrame(() => {
          document.getElementById("observation-record")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }}
    >
      <p className="border-l border-[var(--color-secondary)] pl-4 text-sm leading-6 text-[var(--color-text-primary)]">{copy.notSaved}</p>
      <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{copy.notDiagnosis}</p>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.pet}</legend>
        <TextField label={copy.fields.name} value={form.name} onChange={(value) => update("name", value)} />
        <ChoiceField label={copy.fields.species} value={form.species} onChange={(value) => update("species", value as Species)} options={[["dog", copy.species.dog], ["cat", copy.species.cat]]} />
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.body}</legend>
        <TextField label={copy.fields.age} value={form.age} onChange={(value) => update("age", value)} inputMode="decimal" />
        <TextField label={copy.fields.weight} value={form.weight} onChange={(value) => update("weight", value)} inputMode="decimal" />
        <ChoiceField label={copy.fields.body} value={form.body} onChange={(value) => update("body", value)} options={copy.bodyOptions.map((item) => [item.id, item.label])} />
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.diet}</legend>
        <TextField label={copy.fields.food} value={form.food} onChange={(value) => update("food", value)} />
        <CheckField label={copy.fields.habit} options={copy.habitOptions} selected={form.habits} onToggle={(id) => toggle("habits", id)} />
        <TextField label={copy.fields.habitNote} value={form.habitNote} onChange={(value) => update("habitNote", value)} />
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.activity}</legend>
        <ChoiceField label={copy.fields.activity} value={form.activity} onChange={(value) => update("activity", value)} options={copy.activityOptions.map((item) => [item.id, item.label])} />
        <TextField label={copy.fields.activityNote} value={form.activityNote} onChange={(value) => update("activityNote", value)} />
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.observation}</legend>
        <ChoiceField label={copy.fields.stool} value={form.stool} onChange={(value) => update("stool", value)} options={copy.stoolOptions.map((item) => [item.id, item.label])} />
        <ChoiceField label={copy.fields.water} value={form.water} onChange={(value) => update("water", value)} options={copy.waterOptions.map((item) => [item.id, item.label])} />
        <TextField label={copy.fields.observationNote} value={form.observationNote} onChange={(value) => update("observationNote", value)} />
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.concern}</legend>
        <CheckField label={copy.fields.concern} options={copy.concernOptions} selected={form.concerns} onToggle={(id) => toggle("concerns", id)} />
        <TextField label={copy.fields.concernNote} value={form.concernNote} onChange={(value) => update("concernNote", value)} />
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg">{copy.sections.safety}</legend>
        <ChoiceField label={copy.fields.symptoms} value={form.symptoms} onChange={(value) => update("symptoms", value as YesNo)} options={[["no", copy.no], ["yes", copy.yes]]} />
        <ChoiceField label={copy.fields.medications} value={form.medications} onChange={(value) => update("medications", value as YesNo)} options={[["no", copy.no], ["yes", copy.yes]]} />
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
        <section id="observation-record" className="surface mt-8 scroll-mt-32 p-6" aria-live="polite">
          <h2 className="text-2xl">{copy.summaryTitle}</h2>
          {form.species === "cat" ? <p className="mt-3 text-sm leading-6">{copy.catNote}</p> : null}
          {sections.map((section) => {
            const lines = section.lines.filter(Boolean);
            return (
              <div key={section.title} className="mt-5">
                <h3 className="text-sm tracking-[0.14em] text-[var(--color-primary)]">{section.title}</h3>
                <ul className="mt-2 space-y-1">
                  {(lines.length ? lines : [copy.emptyValue]).map((line) => (
                    <li key={line} className="text-sm leading-6">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <h3 className="mt-5 text-sm tracking-[0.14em] text-[var(--color-primary)]">{copy.missing}</h3>
          <ul className="mt-2 space-y-1">
            {(missing.length ? missing : [copy.missingNone]).map((item) => (
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
          ) : null}
          {relatedProducts.length ? (
            <div className="mt-6">
              <h3 className="text-lg">{copy.productsTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{copy.productsNote}</p>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {relatedProducts.map((product) => (
                  <li key={product.slug}>
                    <Link href={`/${locale}/products/${product.slug}/`} className="surface block overflow-hidden hover:border-[var(--color-primary)]">
                      <Photo src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover" />
                      <div className="p-4">
                        <h4 className="text-base">{product.name}</h4>
                        <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{product.summary}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}
    </form>
  );
}

function TextField({ label, value, onChange, inputMode }: { label: string; value: string; onChange: (value: string) => void; inputMode?: "text" | "decimal" }) {
  return (
    <label className="block text-sm">
      {label}
      <input value={value} inputMode={inputMode ?? "text"} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded-[10px] border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-3 text-[var(--color-text-primary)]" />
    </label>
  );
}

function ChoiceField({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: [string, string][] }) {
  return (
    <fieldset>
      <legend className="text-sm">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map(([id, text]) => (
          <label key={id} className="surface flex min-h-11 items-center gap-2 px-3 py-2 text-sm">
            <input type="radio" name={label} checked={value === id} onChange={() => onChange(id)} />
            {text}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckField({ label, options, selected, onToggle }: { label: string; options: { id: string; label: string }[]; selected: string[]; onToggle: (id: string) => void }) {
  return (
    <fieldset>
      <legend className="text-sm">{label}</legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {options.map((item) => (
          <label key={item.id} className="surface flex min-h-11 items-center gap-3 px-4 py-3 text-sm">
            <input type="checkbox" checked={selected.includes(item.id)} onChange={() => onToggle(item.id)} />
            {item.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
