import { Component } from "../core/MiniReact.js";


 class Button extends Component {
 
 constructor(props)
 {
  super(props);
  this.props = props;
 }

  render() {
    return {
      type: "button",
      props: {

        ...this.props,
      },
      events: {
        click: [this.props.onClick]
      },
      children: [
        {
          type: "TEXT_NODE",
          content: this.props.title,
        },
      ],
    };
  }
}

export default Button;
