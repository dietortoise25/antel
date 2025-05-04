import Footer from "@/components/HomePage/Footer";
import Header from "@/components/HomePage/Header";
import ProductSection from "@/components/HomePage/ProductSection";
import SoftwareSection from "@/components/HomePage/SoftwareSection";
import SolutionSection from "@/components/HomePage/SolutionSection";
import StrengthSection from "@/components/HomePage/StrengthSection";


function HomePage() {
    return (
        <>
            <Header />
            <SolutionSection />
            <ProductSection />
            <SoftwareSection />
            <StrengthSection />
            <Footer />
        </>
    );
}
export default HomePage;
