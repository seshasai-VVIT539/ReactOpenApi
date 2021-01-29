import './index.css';
var user={
  name:"sai",
  email:"sai@gmail.com"
};
// users.push(user);

class UserDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div id="container">
              <NewButton />
              <RefreshButton />
            </div>
            <Users />
          </div>
        );
    }
}

class NewButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div id="new">
            <i className="fa fa-plus" aria-hidden="true"></i> NEW
          </div>
        );
    }
}

class RefreshButton extends React.Component{
  constructor(props) {
      super(props);
  }

  render(){
    return (
      <div id="refresh">
        <i class="fa fa-refresh" aria-hidden="true"> Refresh</i>
      </div>
    );
  }
}

class Users extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div id="users">

      </div>
    );
  }
}

class User extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class='user'>
        <div class='firstName'>Sai</div>
        <div class='email'></div>
      </div>
    );
  }
}


ReactDOM.render(<UserDetailsContainer / > , document.getElementById('root'));













// const scaleNames = {
//     c: "Celcius",
//     f: "Fahrenheit"
// };

// function toCelcius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     return Math.round(convert(input) * 1000) / 1000;
// }

// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         this.props.onTempChange(e.target.value);
//     }

//     render() {
//         const temperature = this.props.temperature;
//         const scale = scaleNames[this.props.scale];
//         return ( <
//             fieldset >
//             <
//             legend > Enter temperature in { scale } < /legend> <
//             input value = { temperature }
//             onChange = { this.handleChange }
//             />   < /
//             fieldset >
//         );
//     }
// }

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { temperature: '', scale: 'c' };
//         this.handleCelciusChange = this.handleCelciusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     }

//     handleCelciusChange(temperature) {
//         this.setState({ scale: 'c', temperature });
//     }

//     handleFahrenheitChange(temperature) {
//         this.setState({ scale: 'f', temperature });
//     }

//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//         return ( <
//             div >
//             <
//             TemperatureInput temperature = { celcius }
//             scale = "c"
//             onTempChange = { this.handleCelciusChange }
//             /> <
//             TemperatureInput temperature = { fahrenheit }
//             scale = "f"
//             onTempChange = { this.handleFahrenheitChange }
//             /> < /
//             div >
//         );
//     }
// }
