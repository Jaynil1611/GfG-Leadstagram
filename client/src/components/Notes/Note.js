import React from "react";
import Moment from "moment";
import { Link } from "react-router-dom";

const NoteContent = ({ Note }) => {
  return (
    <section
      className={"NotesContainer-Content" + (Note.private ? " private" : "")}
    >
      <header>
        <h3>{Note.title}</h3>
        <div className="Author">
          <p>
            Written by <em>{Note.username}</em> on{" "}
            <em>{Moment(Note.createdAt).format("MMMM Do YYYY, h:mm a")}</em>.
            {Note.editCount > 0 ? (
              <>
                {" "}
                Last updated on{" "}
                <em>
                  {Moment(Note.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                </em>
                . This note was edited <em>{Note.editCount}</em> time
                {Note.editCount === 1 ? "" : "s"}.
              </>
            ) : (
              ""
            )}
          </p>
        </div>
      </header>
      <article className="border rounded p-3">{Note.content}</article>
      <Link to="/" className="btn btn-sm btn-info mt-3">
        Back to Home
      </Link>
    </section>
  );
};

export default NoteContent;
