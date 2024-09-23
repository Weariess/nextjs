import ItemList from "/app/components/ItemList.js";
import BlokTxt from "/app/components/BlokTxt.js";
import ImageWithText from "/app/components/ImageWithText.js";
import ConditionalDisplay from "/app/components/ConditionalDisplay.js"
import SimpleForm from "/app/components/SimpleForm.js"
import ListWithObjects from "/app/components/ListWithObjects.js"

function HomePage() {
    return( <div style={{margin: "30px"}}>
    <h2 style={{margin:'15px'}}>Wiktoria Duciak</h2>
    <ItemList
    item="5"
    index="5"/>
    <BlokTxt
    heading="Heading"
    content="content"
    />

    <ImageWithText
    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/225px-React_Logo_SVG.svg.png"
    text="Obraz"/>

    <SimpleForm
    placeholder="Wpisz tekst"/>

    <ConditionalDisplay
    isVisible="true"/>

    <ListWithObjects
    items={[{name:'test1', value:'test1'}, {name:'test2', value:'tescik'}]}
    />

    </div>
    );
  }
  export default HomePage;