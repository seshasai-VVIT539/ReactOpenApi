import {
  fetchAllContacts,
  updateContact,
  addContact,
  deleteContact
} from "../Services/ContactServices";
import {Contact} from "./Contact";
import {ShowContact} from "./ShowContact.js";

export class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: [],
      selectedContact:undefined,
      editSelectedContact:false
    };
    this.handleEdit=this.editingContact.bind(this);
    this.handleClick=this.contactClicked.bind(this);
  }
  contactClicked(contact){
    this.setState({selectedContact:contact});
  }
  editingContact(){
    this.setState({editSelectedContact:true});
  }
  componentDidMount() {
    fetchAllContacts()
      .then((data) => {
        this.setState({
          contactsList: data
        })
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    let contactList = this.state.contactsList;
    let contactsToDisplay = contactList.map((contact) =>
      <Contact data = {contact} key={contact.ID} onClick={this.handleClick} />
    );
    let viewSelectedContact = typeof this.state.selectedContact==="undefined"?"":<ShowContact contact={this.state.selectedContact} handleEdit={this.handleEdit} />
    return (
        <div className="container">
          <div id = "contacts">
            <h3>CONTACTS</h3>
            {contactsToDisplay}
          </div>
          {viewSelectedContact}
       </div>
     );
  }
}
