import FadeInAnimation from '@/components/FadeInAnimation';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <FadeInAnimation>
        <ContactHeader />
      </FadeInAnimation>
      <FadeInAnimation delay={0.2}>
        <ContactForm />
      </FadeInAnimation>
    </div>
  );
}
