import Footer from "@/components/HomePage/Footer";
import Header from "@/components/HomePage/Header";
import ProductSection from "@/components/HomePage/ProductSection";
import SoftwareSection from "@/components/HomePage/SoftwareSection";
import SolutionSection from "@/components/HomePage/SolutionSection";


function HomePage() {
    return (
        <>
            <Header />
            <SolutionSection />
            <ProductSection />
            <SoftwareSection />
            <Footer />
        </>
    );
}
export default HomePage;
