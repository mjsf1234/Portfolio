import "./Home.css";
import { Section, SectionText, SectionTitle, LeftSection } from "../UI/Style";

const Home = () => {
  return (
    <Section id="home">
      <LeftSection>
        <SectionTitle>
          Welcome to <br />
          My portfolio
        </SectionTitle>
        <SectionText>
          This is my portfolio where you can see my work and interships and can
          contacts me
        </SectionText>
      </LeftSection>
    </Section>
  );
};

export default Home;
