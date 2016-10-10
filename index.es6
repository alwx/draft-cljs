import React from 'react';
import {Editor, EditorState} from 'draft-js';

export default class StatelessEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.onChange = (editorState) => {
      this.setState({editorState});
      this.props.onStateChange(editorState);
    };

    this.getEditorState = () => this.state.editorState;
    this.setEditorState = (editorState) => this.state = editorState;
  }

  render() {
    const {editorState} = this.state;
    return <Editor editorState={editorState}
                   onChange={this.onChange}
                   {...this.props}
           />;
  }
}
