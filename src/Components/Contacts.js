import {
  fetchAllContacts,
  updateContact,
  addContact,
  deleteContact
} from "../Services/ContactServices";
import {validateForm} from "../validation";
import {NavBar} from "./NavBar";
import {Contact} from "./Contact";
import {ShowContact} from "./ShowContact";
import {ContactForm} from "./ContactForm";

export class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: [],
      selectedContact:undefined,
      editSelectedContact:false,
      creatingNewContact:false,
      updateData:false
    };
    this.handleEdit=this.editingContact.bind(this);
    this.contactClicked=this.contactClicked.bind(this);
    this.newContact=this.newContact.bind(this);
    this.homeClicked=this.homeClicked.bind(this);
    this.saveContact=this.saveContact.bind(this);
    this.cancelAction=this.cancelAction.bind(this);
    this.deleteContact=this.deleteContact.bind(this);
  }
  contactClicked(contact){
    this.setState({selectedContact:contact, editSelectedContact:false, creatingNewContact:false});
  }
  editingContact(){
    console.log("editing "+this.state.selectedContact.ID);
    this.setState({editSelectedContact:true});
  }
  newContact(){
    console.log("creating new contact");
    this.setState({creatingNewContact:true , selectedContact:undefined , editSelectedContact:false});
  }
  saveContact(contact){
      if(this.state.selectedContact){
        updateContact(contact)
        .then(status=>{
          this.setState({selectedContact:undefined, editSelectedContact:false, updateData:true, creatingNewContact:false});
        })
        .catch(error=>{
          alert(error);
        });
      }else{
        addContact(contact)
        .then(status=>{
          this.setState({selectedContact:undefined, editSelectedContact:false, updateData:true, creatingNewContact:false});
        })
        .catch(error=>{
          alert(error);
        });
      }
  }
  deleteContact(){
    let object=this;
    deleteContact(this.state.selectedContact)
    .then(status => {
      object.setState({selectedContact:undefined, updateData:true});
      console.log(object.state);
    })
    .catch((error) =>{
      alert("something went wrong\nRequest failed");
    });
  }
  cancelAction(){
    console.log("cancelling action");
    this.setState({editSelectedContact:false,creatingNewContact:false});
  }
  homeClicked(){
    console.log("home clicked");
    this.setState({creatingNewContact:false,selectedContact:undefined,editSelectedContact:false});
  }
  componentDidMount() {
    fetchAllContacts()
      .then((data) => {
        this.setState({contactsList: data});
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  componentDidUpdate(){
    if(this.state.updateData){
      this.setState({updateData:false});
      fetchAllContacts()
        .then((data) => {
          this.setState({
            contactsList: data
          })
        })
        .catch((error) => {
          alert(error);
        });
        return true;
    }
    return false;
  }
  render() {
    let contactList = this.state.contactsList;
    let contactsToDisplay = contactList.map((contact) =>
      <Contact data = {contact} key={contact.ID} onClick={this.contactClicked} />
    );
    let viewSelectedContact = typeof this.state.selectedContact==="undefined"?"":<ShowContact contact={this.state.selectedContact} handleEdit={this.handleEdit} deleteContact={this.deleteContact} />
    let editingContact = (this.state.editSelectedContact || this.state.creatingNewContact)?<ContactForm contact={this.state.selectedContact} saveContact={this.saveContact} cancelAction={this.cancelAction}/>:(undefined);
    if(editingContact){
      viewSelectedContact=undefined;
    }
    return (
      <div>
      <NavBar createNewContact={this.newContact} homeClicked={this.homeClicked} />
        <div className="container">
          <div id = "contacts">
            <h3>CONTACTS</h3>
            {contactsToDisplay}
          </div>
          {viewSelectedContact}
          {editingContact}
       </div>
       </div>
     );
  }
}
