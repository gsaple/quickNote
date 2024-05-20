import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PropTypes from "prop-types";

const Note = ({ note, deleteNote }) => {
  return (
    <div className="note">
      <div className="note__body">{note.text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverIcon
          className="note__delete"
          aria-hidden="true"
          onClick={() => deleteNote(note.id)}
        ></DeleteForeverIcon>
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object,
  deleteNote: PropTypes.func,
};

export default Note;
