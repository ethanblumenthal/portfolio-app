import FadeInAnimation from '@/components/FadeInAnimation';
import AboutHeader from '@/components/about/AboutHeader';
import AboutBio from '@/components/about/AboutBio';
import AboutExperience from '@/components/about/AboutExperience';
import AboutEducation from '@/components/about/AboutEducation';
import TechStack from '@/components/TechStack';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <FadeInAnimation>
        <AboutHeader />
      </FadeInAnimation>
      <FadeInAnimation delay={0.4}>
        <AboutBio />
      </FadeInAnimation>
      <FadeInAnimation delay={0.6}>
        <AboutExperience />
      </FadeInAnimation>
      <FadeInAnimation delay={0.8}>
        <AboutEducation />
      </FadeInAnimation>
      <FadeInAnimation delay={1.0}>
        <TechStack />
      </FadeInAnimation>
    </div>
  );
}
