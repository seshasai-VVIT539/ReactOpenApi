import {NewButton} from "./NewButton";
import {HomeButton} from "./HomeButton";
//import {logo} from "../img.png";
export class NavBar extends React.Component{
  render(){
      return (
        <div className="navbar">
          <div className="options">
            <HomeButton homeClicked={this.props.homeClicked}/>
            <NewButton createNewContact={this.props.createNewContact}/>
          </div>
        </div>
      );
  }
}
