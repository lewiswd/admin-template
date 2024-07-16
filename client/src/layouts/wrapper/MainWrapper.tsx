import { Header, Sidebar } from "@/components";

const MainWrapper = () => {
    return (
        <main className="flex flex-col-reverse md:flex-row h-screen overflow-hidden">
            <Sidebar />
            <section className="flex-1 flex-shrink-0 overflow-x-hidden overflow-y-auto md-scrollbar relative">
                <Header />
                <div className="py-2 px-4 md:py-4 md:px-8">
                    <p>content</p>
                </div>
            </section>
        </main>
    );
};

export default MainWrapper;
