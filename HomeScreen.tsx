import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


// simple placeholder icon component; replace with proper icon library later
function SomeIcon({name}: {name: string}) {
  return <Text style={{fontSize: 24}}>{name}</Text>;
}


export function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />

      <Hero />

      <StatsRow />

      <FeaturesGrid />

      <IndustrySection />

      {/* …other sections… */}

      <Footer />
    </ScrollView>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logoContainer}>
        {/* logo.png not available in repo; using text placeholder */}
        <View style={[styles.logo, {backgroundColor: '#0366d6'}]} />
        <Text style={styles.logoText}>engineers.network</Text>
      </TouchableOpacity>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, styles.ctaButton]}>
          <Text style={[styles.navText, styles.ctaText]}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Hero() {
  return (
    <View style={styles.hero}>
      <Text style={styles.pill}>THE GLOBAL HUB FOR DEEP TECH</Text>
      <Text style={styles.heading}>
        Where Engineering{'\n'}Minds Connect
      </Text>
      <Text style={styles.subheading}>
        The premium platform for engineers, scientists, and technology innovators …
      </Text>
      <View style={styles.heroCtas}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Get Started for Free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Explore Features</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function StatsRow() {
  const stats = [
    { value: '50k+', label: 'Verified Engineers' },
    { value: '12k+', label: 'Global Tenders' },
    { value: '850+', label: 'Specialized Courses' },
    { value: '140+', label: 'Countries Represented' },
  ];
  return (
    <View style={styles.statsRow}>
      {stats.map(s => (
        <View key={s.label} style={styles.stat}>
          <Text style={styles.statValue}>{s.value}</Text>
          <Text style={styles.statLabel}>{s.label}</Text>
        </View>
      ))}
    </View>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <View style={styles.featureCard}>
      <View style={styles.featureIcon}>{icon}</View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDesc}>{description}</Text>
    </View>
  );
}

function FeaturesGrid() {
  const features = [
    {
      title: 'Professional Feed',
      desc: 'Share deep‑tech insights, whitepapers, and project updates.',
      icon: <SomeIcon name="⚡" />,
    },
    {
      title: 'Elite Job Board',
      desc: 'Access high-tier technical roles from top companies.',
      icon: <SomeIcon name="💼" />,
    },
    {
      title: 'Project Tenders',
      desc: 'Discover high-value project opportunities and submit bids.',
      icon: <SomeIcon name="📄" />,
    },
    {
      title: 'Learn from Experts',
      desc: 'Master new domains through specialized courses created by industry veterans.',
      icon: <SomeIcon name="📘" />,
    },
    {
      title: 'Verified Network',
      desc: 'Build meaningful professional circles with peer reviewers and mentors.',
      icon: <SomeIcon name="👥" />,
    },
    {
      title: 'Technical Collab',
      desc: 'High-security direct messaging for deep‑tech collaboration.',
      icon: <SomeIcon name="💬" />,
    },
  ];
  return (
    <View style={styles.featuresGrid}>
      {features.map(f => (
        <FeatureCard
          key={f.title}
          title={f.title}
          description={f.desc}
          icon={f.icon}
        />
      ))}
    </View>
  );
}

function IndustrySection() {
  const industries = [
    'Aerospace',
    'Software',
    'Mechanical',
    'Electrical',
    'Civil',
    'Chemical',
    'Biotech',
    'Energy',
    'Environmental',
    'Industrial',
    'Materials',
    'Telecom',
    'Construction',
  ];
  return (
    <View style={styles.industrySection}>
      <Text style={styles.industryTitle}>Supporting Every Engineering Domain</Text>
      <View style={styles.industryRow}>
        {industries.map(name => (
          <View key={name} style={styles.industryItem}>
            <SomeIcon name="🔧" />
            <Text style={styles.industryLabel}>{name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2026 engineers.network. Designed for deep tech.
      </Text>
      {/* add links etc. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 40 },
  header: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 32, height: 32 },
  logoText: { marginLeft: 8, fontSize: 18, fontWeight: 'bold' },
  nav: { flexDirection: 'row', gap: 8 },
  navButton: { paddingHorizontal: 12, paddingVertical: 6 },
  navText: { fontSize: 14, fontWeight: '600' },
  ctaButton: { backgroundColor: '#0366d6', borderRadius: 20 },
  ctaText: { color: '#fff' },
  hero: { padding: 20, alignItems: 'center' },
  pill: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: '700',
  },
  heading: { fontSize: 32, fontWeight: '800', textAlign: 'center', marginVertical: 12 },
  subheading: { fontSize: 16, textAlign: 'center', color: '#555', maxWidth: 300 },
  heroCtas: { flexDirection: 'row', marginTop: 20, gap: 12 },
  primaryButton: {
    backgroundColor: '#0366d6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
  },
  primaryButtonText: { color: '#fff', fontWeight: '700' },
  secondaryButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
  },
  secondaryButtonText: { color: '#333', fontWeight: '700' },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
  },
  stat: { alignItems: 'center' },
  statValue: { fontSize: 24, fontWeight: '800', color: '#0366d6' },
  statLabel: { fontSize: 10, textTransform: 'uppercase', color: '#666' },
  featuresGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16 },
  featureCard: { width: '48%', marginVertical: 8, padding: 16, backgroundColor: '#fff', borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 },
  featureIcon: { marginBottom: 12 },
  featureTitle: { fontSize: 16, fontWeight: '700' },
  featureDesc: { fontSize: 12, color: '#555', marginTop: 4 },
  industrySection: { paddingVertical: 24, paddingHorizontal: 16, alignItems: 'center' },
  industryTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  industryRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16 },
  industryItem: { alignItems: 'center', width: 80, marginVertical: 8 },
  industryLabel: { fontSize: 10, textAlign: 'center', marginTop: 4 },
  footer: { padding: 20, alignItems: 'center', borderTopWidth: 1, borderColor: '#ccc' },
  footerText: { fontSize: 12, color: '#888' },
});