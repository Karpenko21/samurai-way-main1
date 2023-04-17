import React from "react";
import './App.css';
import Accordion from "./components/Accordion/accordion";
import Rating from "./components/Rating/rating";


const App = () => {
    console.log("App is rendering.");
    return (
        <div>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'Friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed ={true} />
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string;
}
function PageTitle(props: PageTitlePropsType) {
    debugger;
    console.log("AppTitle is rendering.");
    return (
        <h1>{props.title}</h1>
    );
}


export default App;

