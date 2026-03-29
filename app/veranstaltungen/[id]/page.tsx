import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Clock, Users, Euro, ArrowLeft, ChevronRight, Bus } from "lucide-react";
import { EVENTS, SECTIONS, SITE } from "@/lib/data";
import { formatDate, categoryColor } from "@/lib/utils";
import EventRegistrationModal from "@/components/EventRegistrationModal";
import SectionIcon from "@/components/SectionIcon";

export async function generateStaticParams() {
  return EVENTS.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const event = EVENTS.find((e) => e.id === id);
  if (!event) return {};
  return {
    title: event.title,
    description: event.description,
  };
}

// Client wrapper so we can use the modal
import EventDetailClient from "./EventDetailClient";

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = EVENTS.find((e) => e.id === id);
  if (!event) notFound();

  const section = SECTIONS.find((s) => s.id === event.section);
  const related = EVENTS
    .filter((e) => e.section === event.section && e.id !== event.id)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return <EventDetailClient event={event} section={section} related={related} />;
}
