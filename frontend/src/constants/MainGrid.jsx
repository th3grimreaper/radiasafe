import styled from "styled-components";

const MainGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-areas:
    "main main main main"
    "article article article sidebar"
    "article article article sidebar"
    "section section section section"
    "product product product product";
  text-align: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  grid-area: main;

`;

const Sidebar = styled.aside`
  grid-area: sidebar;
`;
const Article = styled.article`
  grid-area: article;
`;
const Section = styled.section`
  grid-area: section;
`;

const Products = styled.div`
  grid-area: product;
`;

export { MainGrid, MainContent, Sidebar, Article, Section, Products };
