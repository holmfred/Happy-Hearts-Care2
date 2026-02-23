import HomeBanner from "./components/HomeBanner";
import HomeNews from "./components/HomeNews";
import HomeParagraph from "./components/HomeParagraph";
import HomeProject from "./components/HomeProjects";


function Home () {
    return (
      <main id="main">
        <HomeBanner />
        <HomeParagraph />
        <HomeProject />
        <HomeNews />   
      </main>
    );
  }
  
  export default Home;