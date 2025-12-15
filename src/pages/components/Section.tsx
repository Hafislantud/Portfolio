import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  classmate?: string;
  app: string;
}

export const Section = ({ id, children, classmate }: SectionProps) => {
  return (
    <section id={id} className={`section-container ${classmate ?? ""}`}>
      {children}
    </section>
  );
};
