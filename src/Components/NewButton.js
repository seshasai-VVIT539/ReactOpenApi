export class NewButton extends React.Component {
    constructor(props) {
        super(props);
        this.clicked=this.clicked.bind(this);
    }
    clicked(){
      this.props.createNewContact();
    }
    render() {
        return (
          <div id="new" className="option" onClick={this.clicked}>
            + ADD
          </div>
        );
    }
}
