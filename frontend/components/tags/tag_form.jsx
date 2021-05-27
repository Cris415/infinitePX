import React from 'react';
import TagIndex from './tag_index';

class TagForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: '', tags:[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
  }

  handleChange(e){
    e.preventDefault();

    this.setState({ name: e.currentTarget.value })
  }

  handleAddTag(e){
    e.preventDefault();
    if (this.state.name.length > 1){
      this.setState({tags: [...this.state.tags, this.state.name.toLowerCase()]}, 
        this.setState({name: ''})
        )
    }
  }

  render(){
    return (
      <div className="tag-form">
        <TagIndex tags={ this.state.tags.map((tag, i) => ({id: i, name: tag })) } /> 
        <input type="text" value={this.state.name} onChange={this.handleChange}/>
        <button onClick={this.handleAddTag}>Add Tag</button>
      </div>
    )
  }
}

export default TagForm;