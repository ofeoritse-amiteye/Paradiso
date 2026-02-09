import NewsHero from "@/components/news/NewsHero";
import NewsCategories from "@/components/news/NewsCategories";
import LatestNews from "@/components/news/LatestNews";
import NewsletterSignup from "@/components/news/NewsletterSignup";

export default function NewsPage() {
    return (
        <main className="bg-white">
            <NewsHero />
            <NewsCategories />
            <LatestNews />
            <NewsletterSignup />
        </main>
    );
}
