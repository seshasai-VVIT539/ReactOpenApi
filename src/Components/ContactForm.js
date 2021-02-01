export class ContactForm extends React.Component{
  render(){
    return (
      <div className="form-container">
          <form className="form" action="#" onsubmit="addContact()">
              <div id="error"></div>
              <div className="table">
                  <div className="tr">
                      <div className="td">Name :</div>
                      <div className="td"><input type="text" className="name" placeholder="Enter your name"><span className="req">*</span> </div>
                      <div id="nameError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Email :</div>
                      <div className="td"><input type="text" placeholder="Enter email address" className="email"><span className="req">*</span> </div>
                      <div id="mailError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Phone :</div>
                      <div className="td"><input type="text" placeholder="Enter phone number" className="phone"><span className="req">*</span> </div>
                      <div id="phoneError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Landline :</div>
                      <div className="td"><input type="text" placeholder="Enter landline number" className="landLine"></div>
                      <div id="landLineError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Website :</div>
                      <div className="td"><input type="text" placeholder="Enter website address" className="website"><span className="req">*</span> </div>
                      <div id="websiteError"></div>
                  </div>
                  <div className="tr">
                      <div className="td">Address :</div>
                      <div className="td"><textarea rows="4" cols="22" className="address" placeholder="Enter address"></textarea></div>
                      <div id="addressError"></div>
                  </div>
              </div>
              <input type="button" value="Save" onclick="addContact()">
              <input type="button" value="Cancel" onclick="cancelAction()">
          </form>
        </div>
    );
  }
}
