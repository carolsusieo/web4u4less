import React, {Component} from 'react';
import Section from './Section';


class Signup extends Component {
  constructor(props) {

          super(props);
          this.state = {
               props: props,
           }
      }



render(){

  return(
  <Section name = {this.state.props.name} classList = {this.state.props.classList}
  html = {
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto text-center">

          <i className="fa fa-paper-plane fa-2x mb-2 text-white"></i>
          <h2 className="text-white mb-5">{this.state.props.header}</h2>

          <form className="form-inline d-flex">
            <input type={this.state.props.input} className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id={this.state.props.inputId} placeholder={this.state.props.inputText}></input>
            <button type={this.state.props.button} className="btn btn-primary mx-auto">{this.state.props.buttonText}</button>
          </form>

        </div>
      </div>
    </div>
  }
        >
  </Section>
)
}
}
export default Signup;
