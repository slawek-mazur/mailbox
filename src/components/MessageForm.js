//@flow

import React from "react";
import {connect} from 'react-redux'
import {PulseLoader} from "react-spinners";
import {sendMessage} from "../actions";
import './Messages.css';
import {getRecipients, switchScreen} from "../actions/index";

class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      subject: '',
      message: '',
    };

    this.updateInputValue = this.updateInputValue.bind(this);
  }

  componentDidMount() {
    this.props.loadRecipients();
  }

  render() {
    const {recipients} = this.props;
    const isLoading = recipients.length === 0;

    return (
      <div className="Message MessageForm">
        <div className="Header">
          <div className="Recipient">
            <label>Recipient</label>
            {!isLoading &&
            <select name="recipient" value={this.state.recipient} onChange={e => this.updateInputValue(e)}>
              {recipients.map(r => <option key={r} value={r}>{r}</option>)}
            </select>}
            {isLoading && <PulseLoader className="loader" size={5} color="#222"/>}
          </div>
          <div className="Subject">
            <label>Subject</label>
            <input name="subject" label="Subject" value={this.state.subject} onChange={e => this.updateInputValue(e)}/>
          </div>
        </div>
        <div className="Body">
          <label>Message</label>
          <textarea name="message" rows={10} value={this.state.message} onChange={e => this.updateInputValue(e)}/>
        </div>
        <div className="Actions">
          <button disabled={isLoading} onClick={() => this.props.sendMessage(this.state)}><span>Send Message</span>
          </button>
        </div>
      </div>
    )
  }

  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentWillReceiveProps(props) {
    if (props.recipients[0]) {
      this.setState({
        recipient: props.recipients[0],
      });
    }

    if (props.content) {
      this.setState(props.content)
    }
  }
}

function select(state) {
  return {
    recipients: state.recipients,
    content: state.messages.selected ? state.messages.selected[0] : undefined
  }
}

function actions(dispatch) {
  //todo: hard coded by now, no such field on mockup
  const sender = "Sławomir Mazur";

  return {
    loadRecipients: _ => dispatch(getRecipients()),
    sendMessage: data => {
      dispatch(sendMessage({...data, sender}))
        .then(() => dispatch(switchScreen('ALL_SCREEN')));
    }
  }
}

export default connect(select, actions)(MessageForm);