import React from 'react';
const EmailSectionTab = () => {

  return (
    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <div className="row">
        <div className="col-4">
          <div className="list-group" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active" id="list-email1-list" data-toggle="list" href="#list-email1" role="tab" aria-controls="home">email@domain.com</a>
            <a className="list-group-item list-group-item-action" id="list-email2-list" data-toggle="list" href="#list-email2" role="tab" aria-controls="profile">email@domain.com</a>
            <a className="list-group-item list-group-item-action" id="list-email3-list" data-toggle="list" href="#list-email3" role="tab" aria-controls="messages">email@domain.com</a>
          </div>
        </div>
        <div className="col-8" style={{paddingRight: '1.75rem'}}>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-email1" role="tabpanel" aria-labelledby="list-email1-list">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">To</span>
                </div>
                <input type="text" className="form-control" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Subject</span>
                </div>
                <input type="text" className="form-control" />
              </div>
              <textarea className="email"></textarea>
              <button className="btn btn-primary float-right" style={{marginTop: '1rem'}}>Send</button>
            </div>
            <div className="tab-pane fade" id="list-email2" role="tabpanel" aria-labelledby="list-email2-list">...</div>
            <div className="tab-pane fade" id="list-email3" role="tabpanel" aria-labelledby="list-email3-list">...</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EmailSectionTab;