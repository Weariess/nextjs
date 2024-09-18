import ItemList from "/app/components/ItemList.js";
import BlokTxt from "/app/components/BlokTxt.js";
import ImageWithText from "/app/components/ImageWithText.js";
function HomePage() {
    return( <div style={{margin: "30px"}}>
    <h2 style={{margin:'15px'}}>Wiktoria Duciak</h2>
    <ItemList/>
    <BlokTxt
    heading="Heading"
    content="content"
    />
    <ImageWithText
    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/225px-React_Logo_SVG.svg.png"
    text="Obraz"/>
    </div>
    );
  }
  export default HomePage;