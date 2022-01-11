import React from "react";
import './App.scss';
import Navbar from "./Components/Header/Navbar/Navbar";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import MainBanner from "./Components/Banner/MainBanner";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";

const App = () =>{
    return(
        <>
            {/* <Button btnText="Click Here"/>
            <Button btnText="Click me"/>

            <Heading headingText="Hi i am " headingColor="dinesh" color="red" fontSize = "xl" fontWeight= "bold" fontStyle="italic" headingType = "h1"/>
            <Heading headingText="Hi i am " headingColor="dinesh"
            fontSize = "md" fontWeight= "weight_500" fontStyle="italic" color="black" headingType = "h4"
            /> */}
            <Navbar/>
            <MainBanner headingText="hello dinesh"/>
            <Section/>
            <Footer/>
        </>
    )
}

export default App;

