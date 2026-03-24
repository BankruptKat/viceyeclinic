import { Metadata } from 'next';
import { LayoutContainer } from '@/components/layout-container';
import { getPatientInfo } from '@/lib/queries';

export const metadata: Metadata = {
  title: 'Patient Information | Victoria Eye Care',
  description:
    'Important information for new and returning patients regarding appointments, insurance, and medical records.',
};

export const revalidate = 60;

type PatientInfo = {
  firstVisitTitle?: string;
  firstVisitDescription?: string;
  firstVisitDuration?: string;
  firstVisitSteps?: string[];
  firstVisitNotes?: string[];
  firstVisitWhatToBring?: string[];
  consultationTitle?: string;
  consultationDescription?: string;
  consultationDuration?: string;
  consultationSteps?: string[];
  consultationNotes?: string[];
  costsTitle?: string;
  costsDescription?: string;
  uninsuredExamples?: string[];
};

function normalizeItems(items?: string[]) {
  return items?.map((item) => item.trim()).filter(Boolean) ?? [];
}

function splitDescription(description?: string) {
  if (!description) return [];

  const normalized = description.replace(/\r\n/g, '\n').trim();
  if (!normalized) return [];

  const paragraphs = normalized
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (paragraphs.length > 1) {
    return paragraphs;
  }

  const sentences =
    normalized.match(/[^.!?]+[.!?]+(?:["')\]]+)?|[^.!?]+$/g)?.map((sentence) => sentence.trim()) ?? [normalized];

  if (normalized.length < 280 || sentences.length <= 2) {
    return [normalized];
  }

  const chunks: string[] = [];
  let currentChunk = '';

  sentences.forEach((sentence, index) => {
    const nextChunk = currentChunk ? `${currentChunk} ${sentence}` : sentence;
    const shouldBreak =
      nextChunk.length > 260 ||
      (nextChunk.length > 180 && currentChunk.split(/[.!?](?:["')\]]+)?\s*/).filter(Boolean).length >= 2);

    if (shouldBreak && currentChunk) {
      chunks.push(currentChunk);
      currentChunk = sentence;
    } else {
      currentChunk = nextChunk;
    }

    if (index === sentences.length - 1 && currentChunk) {
      chunks.push(currentChunk);
    }
  });

  return chunks;
}

function BulletList({ items }: { items?: string[] }) {
  const normalizedItems = normalizeItems(items);

  if (!normalizedItems.length) return null;

  return (
    <ul className="list-none space-y-4 text-lg text-foreground/70">
      {normalizedItems.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-start gap-4">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PatientPanel({
  children,
  muted = false,
  className = '',
}: {
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-border p-6 md:p-8 ${muted ? 'bg-muted/20' : 'bg-background'} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function PatientSection({
  label,
  title,
  description,
  duration,
  primaryListLabel,
  primaryList,
  secondaryListLabel,
  secondaryList,
  tertiaryListLabel,
  tertiaryList,
  featured = false,
}: {
  label: string;
  title?: string;
  description?: string;
  duration?: string;
  primaryListLabel?: string;
  primaryList?: string[];
  secondaryListLabel?: string;
  secondaryList?: string[];
  tertiaryListLabel?: string;
  tertiaryList?: string[];
  featured?: boolean;
}) {
  const descriptionParagraphs = splitDescription(description);
  const hasListContent = primaryList?.length || secondaryList?.length || tertiaryList?.length;

  return (
    <section className="border-t border-border pt-8">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-foreground/40">
        [ {label} ]
      </h2>

      <div className={featured ? 'space-y-8' : 'space-y-6'}>
        {(title || duration) ? (
          <div
            className={
              featured
                ? 'flex flex-col gap-4 md:flex-row md:items-center md:justify-between'
                : 'space-y-3'
            }
          >
            {title ? (
              <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
                {title}
              </h3>
            ) : null}

            {duration ? (
              <p
                className={
                  featured
                    ? 'w-fit rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground/70'
                    : 'text-lg font-medium text-foreground/60'
                }
              >
                {featured ? duration : `Duration: ${duration}`}
              </p>
            ) : null}
          </div>
        ) : null}

        {descriptionParagraphs.length ? (
          <PatientPanel muted={featured} className={featured ? 'space-y-4' : 'space-y-4 border-0 bg-transparent p-0'}>
            {descriptionParagraphs.map((paragraph, index) => (
              <p
                key={`${paragraph.slice(0, 24)}-${index}`}
                className={
                  featured
                    ? 'max-w-3xl text-lg md:text-xl font-medium leading-8 text-foreground/85'
                    : 'text-xl md:text-2xl font-medium leading-relaxed text-foreground/80'
                }
              >
                {paragraph}
              </p>
            ))}
          </PatientPanel>
        ) : null}

        {hasListContent ? (
          <div className={featured ? 'grid gap-6 md:grid-cols-2' : 'space-y-6'}>
            {primaryList?.length ? (
              <PatientPanel className={featured ? 'space-y-4' : 'space-y-4 border-0 bg-transparent p-0'}>
                {primaryListLabel ? (
                  <p className="text-lg text-foreground/70">{primaryListLabel}</p>
                ) : null}
                <BulletList items={primaryList} />
              </PatientPanel>
            ) : null}

            {secondaryList?.length ? (
              <PatientPanel className={featured ? 'space-y-4' : 'space-y-4 border-0 bg-transparent p-0'}>
                {secondaryListLabel ? (
                  <p className="text-lg text-foreground/70">{secondaryListLabel}</p>
                ) : null}
                <BulletList items={secondaryList} />
              </PatientPanel>
            ) : null}

            {tertiaryList?.length ? (
              <PatientPanel
                className={featured ? 'space-y-4 md:col-span-2' : 'space-y-4 border-0 bg-transparent p-0'}
              >
                {tertiaryListLabel ? (
                  <p className="text-lg text-foreground/70">{tertiaryListLabel}</p>
                ) : null}
                <BulletList items={tertiaryList} />
              </PatientPanel>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default async function PatientInfoPage() {
  const patientInfo = (await getPatientInfo()) as PatientInfo | null;

  return (
    <div className="py-16 md:py-32">
      <LayoutContainer>
        <div className="flex flex-col items-center justify-between gap-4 border-b border-border pb-12 text-center md:flex-row md:items-end md:gap-8 md:pb-16 md:text-left mb-12 md:mb-16">
          <h1 className="w-full text-5xl font-serif font-bold tracking-tighter sm:text-6xl md:text-8xl">
            Patient
            <br className="hidden md:block" /> Information.
          </h1>
          <p className="mx-auto w-full max-w-md text-lg font-medium leading-relaxed text-foreground/70 md:mx-0 md:text-xl">
            Everything you need to know before your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-24">
          <div className="space-y-16 md:col-span-8 md:col-start-3">
            <PatientSection
              label="First Visit"
              title={patientInfo?.firstVisitTitle}
              description={patientInfo?.firstVisitDescription}
              duration={patientInfo?.firstVisitDuration}
              primaryListLabel="What to bring"
              primaryList={patientInfo?.firstVisitWhatToBring}
              secondaryListLabel="What to expect"
              secondaryList={patientInfo?.firstVisitSteps}
              tertiaryListLabel="Additional notes"
              tertiaryList={patientInfo?.firstVisitNotes}
              featured
            />

            <PatientSection
              label="Consultation"
              title={patientInfo?.consultationTitle}
              description={patientInfo?.consultationDescription}
              duration={patientInfo?.consultationDuration}
              primaryListLabel="Consultation steps"
              primaryList={patientInfo?.consultationSteps}
              secondaryListLabel="Additional notes"
              secondaryList={patientInfo?.consultationNotes}
              featured
            />

            <PatientSection
              label="Costs"
              title={patientInfo?.costsTitle}
              description={patientInfo?.costsDescription}
              primaryListLabel="Examples of uninsured services"
              primaryList={patientInfo?.uninsuredExamples}
              featured
            />
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
}
