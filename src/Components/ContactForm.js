import {
  fetchAllContacts,
  updateContact,
  addContact,
  deleteContact
} from "../Services/ContactServices";
import {validateForm} from "../validation";

export class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ID:(this.props.contact?this.props.contact.ID:undefined),
      Name:(this.props.contact?this.props.contact.Name:undefined),
      Email:(this.props.contact?this.props.contact.Email:undefined),
      Phone:(this.props.contact?this.props.contact.Phone:undefined),
      Landline:(this.props.contact?this.props.contact.Landline:undefined),
      Url:(this.props.contact?this.props.contact.Url:undefined),
      Address:(this.props.Address?this.props.contact.Address:undefined)
    };
    this.saveContact=this.saveContact.bind(this);
    this.cancelAction=this.cancelAction.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    let prop=event.target.id;
    this.setState({[prop]:event.target.value});
    console.log(this.state);
  }
  saveContact(){
    if(validateForm()){
      console.log(this.props.contact);
      if(this.props.contact){
      var contact={
        ID:this.state.ID,
        Name:this.state.Name,
        Email:this.state.Email,
        Phone:this.state.Phone,
        Landline:(typeof this.state.Landline==="undefined"?"":this.state.Landline),
        Url:this.state.Url,
        Address:(typeof this.state.Address==="undefined"?"":this.state.Landline)
      };
    }else{
      var contact={
        Name:this.state.Name,
        Email:this.state.Email,
        Phone:this.state.Phone,
        Landline:(typeof this.state.Landline==="undefined"?"":this.state.Landline),
        Url:this.state.Url,
        Address:(typeof this.state.Address==="undefined"?"":this.state.Landline)
      };
    }
      this.props.saveContact(contact);
    }
  }
  cancelAction(){
    this.props.cancelAction();
  }
  render(){
    return (
      <div className="form-container">
          <form className="form" action="#" onSubmit={this.saveContact}>
              <div id="error"></div>
              <div className="table">
                  <div className="tr">
                      <div className="td">Name :</div>
                      <div className="td"><input type="text" className="name" id="Name" value={this.props.contact?this.state.Name:undefined} onChange={this.handleChange} placeholder="Enter your name" /><span className="req">*</span> </div>
                      <div id="nameError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Email :</div>
                      <div className="td"><input type="text" id="Email" value={this.props.contact?this.state.Email:undefined} placeholder="Enter email address" className="email" onChange={this.handleChange} /><span className="req">*</span> </div>
                      <div id="mailError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Phone :</div>
                      <div className="td"><input type="text" id="Phone" placeholder="Enter phone number" value={this.props.contact?this.state.Phone:undefined} className="phone" onChange={this.handleChange} /><span className="req">*</span> </div>
                      <div id="phoneError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Landline :</div>
                      <div className="td"><input type="text" id="Landline" placeholder="Enter landline number" className="landLine" value={this.props.contact?this.state.Landline:undefined} onChange={this.handleChange} /></div>
                      <div id="landLineError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Website :</div>
                      <div className="td"><input type="text" id="Url" placeholder="Enter website address" className="website" value={this.props.contact?this.state.Url:undefined} onChange={this.handleChange} /><span className="req">*</span> </div>
                      <div id="websiteError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Address :</div>
                      <div className="td"><textarea rows="4" cols="22" id="Address" className="address" placeholder="Enter address" value={this.props.contact?this.state.Address:undefined} onChange={this.handleChange}></textarea></div>
                      <div id="addressError"></div>
                  </div>
              </div>
              <input type="button" value="Save" onClick={this.saveContact} />
              <input type="button" value="Cancel" onClick={this.cancelAction} />
          </form>
        </div>
    );
  }
}
