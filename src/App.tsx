import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import gfm from 'remark-gfm'

import './App.css';
class App extends React.Component {

  state = {
    data: ''
  }
  componentDidMount() {
    window.addEventListener('message', event => {
      this.setState({ data: event.data.section })
    })
  }

  public render() {

    const renderers = {
      code: (attributes: any) => {
        return <SyntaxHighlighter style={dracula} language={attributes.language} children={attributes.value} />
      }
    }

    return (
      <div>
        <ReactMarkdown plugins={[[gfm, { singleTilde: false }]]} renderers={renderers}>
          {this.state.data}
        </ReactMarkdown>
      </div>
    );
  }
}

export default App;