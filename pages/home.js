import Button from "../components/Button.js";
import Header from "../components/Header.js";
import MapBox from "../components/MapBox.js";

// console.log(new Button({props: {title: "test"}}));

export default

{
    type: "div",
    children : 
    [
        new Header().render(),
        new MapBox().render(),
        
    ],
    
};

