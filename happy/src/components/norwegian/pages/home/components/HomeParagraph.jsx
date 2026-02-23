import Heading from "../../../../common/heading/Heading";


function HomeParagraph() {
  return (
    <div className="home-paragraph">
      <Heading size="2" content="Målrettet og Engasjert" />
      <div className="home-paragraph-container">
        <hr /> 
        <p>
          Happy Hearts Care jobber i Ngatataek, sør i Kenya. 
          Vår visjon er å påvirke fremtiden til hele samfunnet, 
          og vi har siden starten i 2016 fokusert på utdannelse og 
          mat til de som trenger det aller mest.
        </p>
        <p>
          Med våre støttespilleres hjelp har vi delt ut mat, 
          sikret skolegang for barn og initiert familiebedrifter 
          og inntektsbringende aktiviteter.
        </p>
        <h3>#CareWithUs</h3>
      </div>
    </div>
  );
}

export default HomeParagraph;