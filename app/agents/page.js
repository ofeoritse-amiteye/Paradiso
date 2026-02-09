import AgentHero from "@/components/agents/AgentHero";
import AgentBenefits from "@/components/agents/AgentBenefits";
import FeaturedAgents from "@/components/agents/FeaturedAgents";
import FindAgentFAQ from "@/components/agents/FindAgentFAQ";

export default function AgentsPage() {
    return (
        <main className="bg-white">
            <AgentHero />
            <AgentBenefits />
            <FeaturedAgents />
            <FindAgentFAQ />
        </main>
    );
}
