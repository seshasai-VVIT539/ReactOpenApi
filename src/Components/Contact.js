import {ShowContact} from "./ShowContact";

export class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state={
      id:this.props.data.ID,
      Name:this.props.data.Name,
      Email:this.props.data.Email,
      Phone:this.props.data.Phone,
      Landline:this.props.data.Landline,
      Url:this.props.data.Url,
      Address:this.props.data.Address,
      isShowingContact:false
    };
    this.clicked=this.clicked.bind(this);
  }

  clicked(event){
    this.props.onClick(this.props.data);
    this.setState({isShowingContact:true});
  }

  render(){
    const form=this.state.isShowingContact?<ShowContact data={this.props.data} />:"";
    return(
      <div className='contact' onClick={this.clicked}>
        <div className='firstName'>{this.state.Name}</div>
      </div>
    );
  }
}
