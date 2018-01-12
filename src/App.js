import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {
  
  
  constructor() {
    super();
    this.state = {
      todos: [],
      projects: [],   
    };
  }

  getTodos(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      datatype: "json",
      cache: false,
      success: function(data){
        this.setState({
          todos: data
        }, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }
  
  getProjects(){
    this.setState({projects: [
      {
          id: uuid.v4(),
          title: "Fun Movie",
          category: "Web",
        },
        {
          id: uuid.v4(),
          title: "Bored Movie",
          category: "Web",
        },
        {
          id: uuid.v4(),
          title: "Unmotivated Movie",
          category: "Web",
        }
    ]});
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }
  componentDidMount() {
    this.getTodos(); 
  }
  
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    })
  }
  
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <AddProject addProject={this.handleAddProject.bind(this)} />

        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;