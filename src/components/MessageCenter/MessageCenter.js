import React from 'react';
import EmailSectionTab from './EmailSectionTab';
import PhoneSectionTab from './PhoneSectionTab';
import TextMessageTab from './TextMessageTab';

const MessageCenter = () => {

  return (

    <div className="modal fade" id="messageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document" style={{ maxWidth: '75%' }}>
        <div className="modal-content">
          <div className="modal-header" style={{ paddingBottom: '0px', borderBottom: '0px'}}>
            <h5 className="modal-title" id="exampleModalLabel" style={{ width: '100%'}}>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">SMS</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Email</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Phone</a>
                </li>
              </ul>
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="tab-content" id="myTabContent">
              <TextMessageTab />
              <EmailSectionTab />
              <PhoneSectionTab />
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default MessageCenter;