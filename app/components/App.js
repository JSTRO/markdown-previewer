import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Markdown</h1>
          <textarea onChange={(event) => this.handleChange(event)} value={this.state.markdown} rows="20" style={{width: "500px"}}/>
        </div>
        <div className="col-md-6">
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} style={{color: 'red'}}></div>
        </div>
      </div>
    );
  }
}