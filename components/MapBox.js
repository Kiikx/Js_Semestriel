import { Component } from "../core/MiniReact.js";
import { BrowserLink} from "./BrowserRouter.js";




class MapBox extends Component {
    render() {
        return {
           type: "div",
           props: 
           {
                id: "map",
                class: "map",

           },
    }

}
}




export default MapBox;
