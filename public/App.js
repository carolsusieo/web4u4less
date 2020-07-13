import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
import TopMenu from './components/TopMenu';
import About from './components/About';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Projects from './components/Projects';

class App extends Component{
constructor(props){
  super(props);
  let config = require('./res/myconfig.json');

  this.state = {
    props:props,
    config: {},
  }

  const dotenv = require('dotenv');
  dotenv.config();
}

componentDidMount = async()=>{
  let test =    require('./res/myconfig.json');
  this.setState({
    config: test,
  })
}
render(){

//  const config = require('./res/myconfig.json');
  console.log("landing config: ", this.state.config.landing);
  const landing = this.state.config.landing;
  if(landing){
    const sections = landing.sections;
    const projects = sections.projects;
  return (

    <div id="home">
      <TopMenu title = {landing.lpage.toptitle}></TopMenu>
      <Header title = {landing.lpage.title} text = {landing.lpage.text} buttonLabel={landing.lpage.buttonLabel} ref = {landing.lpage.ref} mission = {landing.lpage.mission}>
      </Header>

     {sections.map(section =>{

       if(section.name == "about"){
         return(<About name = {section.name} header = {section.header} text = {section.text} img = {section.img} mission = {section.mission}> </About>)
       }
       else if(section.name == "signup"){
         return(<Signup name = {section.name} header = {section.header}  button = {section.button} buttonText = {section.buttonText} classList = {section.classList} fields = {section.fields}></Signup>)
       }
       else if(section.name == "contact"){
         return(<Contact name = {section.name} header = {section.header} items = {section.items} social = {section.social} classList = {section.classList}></Contact>)
       }
       else if(section.name == "projects"){
         return(<Projects name = {section.name}  projects = {section.projects}> </Projects>)
       }
      else{
         return(<Section name = {section.name} header = {section.header} text = {section.text} img = {section.img} mission = {section.mission}> </Section>)
       }

     })}

      <footer className="bg-black small text-center text-white-50">
        <div className="container">
          Copyright &copy; {landing.lpage.toptitle} <span> </span> {landing.lpage.copyright_year}
        </div>
      </footer>

    </div>

  );
  }
  return(<div><p>Error in Config</p></div>);
}
}

export default App;
