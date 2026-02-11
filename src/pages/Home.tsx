import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import PlatformOverview from '../components/PlatformOverview';
import AgenticAI from '../components/AgenticAI';
import Capabilities from '../components/Capabilities';
import FinOps from '../components/FinOps';
import Kloudlens from '../components/Kloudlens';
import Outcomes from '../components/Outcomes';
import CustomerTrust from '../components/CustomerTrust';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
    return (
        <>
            <Hero />
            <ProblemStatement />
            <PlatformOverview />
            <AgenticAI />
            <Capabilities />
            <FinOps />
            <Kloudlens />
            <Outcomes />
            <CustomerTrust />
            <FinalCTA />
        </>
    );
}
