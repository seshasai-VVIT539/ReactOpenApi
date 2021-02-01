import {NavBar} from "./NavBar";
import {Contacts} from "./Contacts";

export class ContactDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <NavBar />
              <Contacts />
          </div>
      );
    }
}
