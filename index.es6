import React from 'react';
import Editor from 'draft-js-plugins-editor';
import {EditorState} from 'draft-js';

export default class StatelessEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.onChange = (editorState) => {
      this.setState({editorState});
      this.props.onStateChange(editorState);
    };

    this.getEditorState = () => this.state.editorState;
    this.setEditorState = (newState) => this.setState({editorState: newState});
    this.focus = () => this.refs.editor.focus();
    this.blur = () => this.refs.editor.blur();
  }

  render() {
    const {editorState} = this.state;
    return <Editor editorState={editorState}
                   onChange={this.onChange}
                   ref="editor"
                   {...this.props}
           />;
  }
}
