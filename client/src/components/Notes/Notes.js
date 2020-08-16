import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  GetAllNotes,
  DeleteNote,
  CreateNote
} from "../../services/NotesService";
import WelcomeHeader from "./_WelcomeHeader";
import NotesSidebar from "./_NotesSidebar";
import NotesContainer from "./_NotesContainer";

class Notes extends Component {
  state = {
    Notes: [],
    Deleted: false
  };
  componentDidMount() {
    GetAllNotes().then(res => {
      if (res.status === 200) {
        this.setState({
          Notes: res.data
        });
      }
    });
  }
  DeleteNote = NoteID => {
    DeleteNote(NoteID).then(res => {
      if (res.status === 200) {
        GetAllNotes().then(res => {
          if (res.status === 200) {
            this.setState({
              Notes: res.data,
              Deleted: true
            });
          }
        });
      }
    });
  };
  CreateNote = Note => {
    CreateNote(Note).then(res => {
      if (res.status === 200) {
        GetAllNotes().then(res => {
          if (res.status === 200) {
            this.setState({
              Notes: res.data
            });
          }
        });
      }
    });
  };
  render() {
    const { LoggedIn, Logout } = this.props;
    return (
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <WelcomeHeader LoggedIn={LoggedIn} Logout={Logout} />
              <div className="card-body">
                <div className="row">
                  <Router>
                    <Switch>
                      <Route path={["/new", "/:NoteID", "/"]}>
                        <NotesSidebar
                          Notes={this.state.Notes}
                          LoggedIn={LoggedIn}
                        />
                        <NotesContainer
                          Notes={this.state.Notes}
                          DelNote={this.DeleteNote}
                          LoggedIn={LoggedIn}
                          Deleted={this.state.Deleted}
                          CreateNote={this.CreateNote}
                        />
                      </Route>
                    </Switch>
                  </Router>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
