import styled from "styled-components";

const AboutGrid = styled.div`
    display: grid;
    grid-auto-rows: auto;
    grid-template-areas:
    "content image"
    "content image"
    "contact   .  "
    "contact   .  ";
`;

const Content = styled.section`
    grid-area: content;
`;

const Image = styled.div`
    grid-area: image;
`;

const Contact = styled.div`
    grid-area: contact;
`;

export { AboutGrid, Content, Image, Contact }