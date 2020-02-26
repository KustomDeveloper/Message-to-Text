import React, { useState, Fragment } from 'react';
import OpenChat from '../icons/openchat.png';
import CloseChat from '../icons/closechat.png';

const Chat = () => {
  const [chatStatus, updateChatStatus] = useState(false);
  const [chatIcon, setChatIcon] = useState([OpenChat]); 
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [message, setMessage] = useState(['I\'d like criminal defense attorney, Arik Benari, to call me about a legal case.']);
  
  const closeIconStyle = {
    left:'11px',
    top:'10px'
  }

  const openIconStyle = {
    left:'8px',
    top:'9px'
  }
 
  const icons = { OpenChat, CloseChat }

  const toggleDialog = () => {
    if(!chatStatus) {
        updateChatStatus(true);
        setChatIcon(icons.CloseChat)
    } else {
      updateChatStatus(false);
      setChatIcon(icons.OpenChat)
    }
  }

  const sendMessage = () => {
    // send stuff here
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const didNumber = '16105661006';
    const toNumber = '16073988651';
    const key = '1140_c33554cc97';

        
    console.log(name, phone, message);
    https://api.textbetter.com/SendTexts.aspx?KEY=1140_c33554cc97&DID={DID}&ToNumber={ToNumber}&Message={Message}
    // fetch(proxy + `https://api.textbetter.com/receive?From=${phone}&To=${toNumber}&Message=${message}`, {
    fetch(proxy + `https://api.textbetter.com/SendTexts.aspx?KEY=${key}&DID=${didNumber}&ToNumber=${toNumber}&Message=${message}`, {
      method: 'POST', 
    })

    .then((response) => response.json())
    .then((response) => {
      console.log('Success:', response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return(
    <Fragment>
      <section className={'chatbox ' + chatStatus}>
        <div className="top"><h3>Text Benari Law Now</h3></div>
        <p>Enter your information, and we will text you shortly.</p>
        <input type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value) }></input>
        <input type="tel" name="phone" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value) }></input>
        <textarea value={message} name="message" placeholder="message" onChange={(e) => setMessage(e.target.value) }></textarea>
        <button onClick={() => sendMessage()}>Text us!</button>
      </section>

      <div className="chat_button" onClick={() => toggleDialog()}>
        <img className="chat-icon" style={chatStatus ? closeIconStyle  : openIconStyle } src={chatIcon} />
      </div>
    </Fragment>
  )
}

export default Chat;