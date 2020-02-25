import React from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import html from "../../sources/html";
import Container from "../atoms/Container";
import IframeWrap from "../atoms/IframeWrap";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks,
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
    // this.state = {
    //   editorState: EditorState.createEmpty(),
    // };
  }

  onEditorStateChange = (editorState) => {
    console.log(
      "editorState.getCurrentContent()",
      editorState.getCurrentContent(),
    );
    console.log(
      "convertToRaw(editorState.getCurrentContent())",
      convertToRaw(editorState.getCurrentContent()),
    );
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    this.setState({ editorState });
  };

  myBlockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === "header-one") {
      return "header1";
    }
  };

  activeDesignMode = () => {
    const editor = document.getElementsByTagName("iframe")[0].contentDocument;
    editor.designMode = "On";
    console.log(editor);
  };

  bold = () => {
    const editor = document.getElementsByTagName("iframe")[0].contentDocument;
    editor.execCommand("fontSize", 7);
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <button onClick={this.activeDesignMode}>design mode on</button>
        <button onClick={this.bold}>太字</button>
        <Container>
          {/* <Editor
          blockStyleFn={this.myBlockStyleFn}
          editorState={editorState}
          toolbarClassName="toolbar"
          wrapperClassName="wrapper"
          editorClassName="editor"
          onEditorStateChange={this.onEditorStateChange}
        /> */}
          <IframeWrap>
            <iframe
              title="iframe"
              id="iframe"
              srcDoc={html}
              width="100%"
              height="100%"
              designMode="on"
            />
          </IframeWrap>
        </Container>
      </div>
    );
  }
}
