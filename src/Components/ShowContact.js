export class ShowContact extends React.Component{
  constructor(props){
    super(props);
    this.edit=this.handleEdit.bind(this);
    this.deleteContact=this.deleteContact.bind(this);
  }
  handleEdit(){
    this.props.handleEdit();
  }
  deleteContact(){
    this.props.deleteContact();
  }
  render(){
    return (
      <div className="view-details">
          <div className="details-header">
              <div className="details-heading name">{this.props.contact.Name}</div>
              <div className="options">
                  <button className="option" onClick={this.edit}><i className="fa fa-edit"></i> Edit</button>
                  <button className="option" onClick={this.deleteContact} ><i className="fa fa-trash"></i> Delete</button>
              </div>
          </div>
          <div className="details">
              <div className="table">
                  <div className="tr">
                      <div className="td">Email</div>
                      <div className="td email">{this.props.contact.Email}</div>
                  </div>
                  <div className="tr">
                      <div className="td">Phone</div>
                      <div className="td phone">{this.props.contact.Phone}</div>
                  </div>
                  <div className="tr">
                      <div className="td">Landline</div>
                      <div className="td landLine">{this.props.contact.Landline}</div>
                  </div>
                  <div className="tr">
                      <div className="td">Website</div>
                      <div className="td website">{this.props.contact.Url}</div>
                  </div>
                  <div className="tr">
                      <div className="td">Address</div>
                      <div className="td address">{this.props.contact.Address}</div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
