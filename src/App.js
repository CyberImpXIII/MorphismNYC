import './App.css';
import logo from './Morphism NYC inverted.png'
import React, { useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

function App() {

  useEffect(() => {
    document.title = "Morphism NYC"
 }, []);
  const raLink = 'https://ra.co/widget/event/1645784?hideback=true&bgcolor=ffffff&linkcolor=6b96c2&textcolor=000000'
  const url = "//mc.us5.list-manage.com/signup-form/subscribe?u=4f436e963f83af023fbfc0fe8&id=00cd21e0f0"
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt='logo' width='200px;'/>
      <div className='emailForm'>
      <div className='emailText'>RSVP HERE FOR SECRET ADDRESS </div>
        <MailchimpSubscribe url={url} />

      </div>
      <div className='residentAdvisor'>
        <div className=''> </div>

        {raLink && <iframe id='ra' scroll='no' title='ra' src={raLink} height="2400px" width="100%" />}
      </div>

      </header>
    </div>
  );
}

export default App;