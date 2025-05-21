import HomeArticle from "../../components/article/HomeArticle";
import Hero from "../../components/hero/Hero";
import HomeProducts from "../../components/products/HomeProducts";
import PageSection from "../../components/section/PageSection";
import HomeSidebar from "../../components/aside/HomeSidebar";
import Main from "../../constants/Main";
import {
  Article,
  MainContent,
  MainGrid,
  Products,
  Section,
  Sidebar,
} from "../../constants/MainGrid";

const Home = () => {
  return (
    <>
      <Main className="p-4 bg-white">
        <MainGrid className="pt-4">
          <MainContent className=" text-gray-900 p-4 rounded-sm">
            <Hero />
          </MainContent>
          <Sidebar className=" text-gray-900 p-4 rounded-sm">
            <HomeSidebar />
          </Sidebar>
          <Article className=" text-gray-900 flex items-center p-4 rounded-sm">
            <HomeArticle />
          </Article>
          <Section className=" text-gray-900 p-4 rounded-sm">
            <PageSection />
          </Section>
          <Products className="text-gray-900 p-4 rounded-sm">
            <HomeProducts />
          </Products>
        </MainGrid>
      </Main>
    </>
  );
};

export default Home;
