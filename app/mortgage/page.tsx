import MortgageHero from "@/components/mortgage/MortgageHero";
import MortgageCalculator from "@/components/mortgage/MortgageCalculator";
import MortgageRates from "@/components/mortgage/MortgageRates";
import MortgageTools from "@/components/mortgage/MortgageTools";
import LenderCTA from "@/components/mortgage/LenderCTA";

export default function MortgagePage() {
    return (
        <main className="bg-white">
            <MortgageHero />
            <MortgageCalculator />
            <MortgageRates />
            <MortgageTools />
            <LenderCTA />
        </main>
    );
}
