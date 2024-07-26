import { Component } from "../core/MiniReact.js";
import { BrowserLink } from "../components/BrowserRouter.js";

class Header extends Component {
    render() {
        return {
            type: "div",
            props: {

                class: "header-mainBox"
            },
            children: [
                {
                    type: "div",
                    props: {
                        class: "header-childBox",
                    },
                    children: [
                        {
                            type: "div",
                            children: [
        
                                BrowserLink({
                                    title: "Events",
                                    to: "/events",
                                }),
        
        
                            ],
                        },
        
                        {
                            type: "div",
                            children: [
        
                                BrowserLink({
                                    title: "Jo",
                                    to: "/home",
                                }),
        
                            ],
                        },
        
                        {
                            type: "div",
                            children: [
        
                                BrowserLink({
                                    title: "Spots",
                                    to: "/spots",
                                }),
        
                            ],
                        }

                    ]
                }
               
            ]
        }
    }
}

export default Header;
