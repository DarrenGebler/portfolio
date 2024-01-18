import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  Section,
} from '@/components';
import { ResumeData } from '@/data/resumeData';
import { Globe, Mail } from 'lucide-react';

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{ResumeData.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">{ResumeData.about}</p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={ResumeData.location.locationLink}
                target="_blank"
              >
                <Globe className="size-3" />
                {ResumeData.location.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {ResumeData.contact.email ? (
                <Button className="size-8" variant="outline" size="icon">
                  <a href={`mailto:${ResumeData.contact.email.url}`}>
                    <Mail className="size-4" />
                  </a>
                </Button>
              ) : null}
              {ResumeData.contact.social.map((social) => (
                <Button key={social.name} className="size-8" variant="outline" size="icon">
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {ResumeData.contact.email ? (
                <a href={`mailto:${ResumeData.contact.email.url}`}>
                  <span className="underline">{ResumeData.contact.email.url}</span>
                </a>
              ) : null}
            </div>
          </div>
          <Avatar className="size-28">
            <AvatarImage alt={ResumeData.name} src={ResumeData.avatarUrl} />
            <AvatarFallback>{ResumeData.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">{ResumeData.summary}</p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {ResumeData.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge variant="secondary" className="align-middle text-xs" key={badge}>
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">{work.title}</h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">{work.description}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Education</h2>
          {ResumeData.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">{education.school}</h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {ResumeData.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
      </section>
    </main>
  );
}
