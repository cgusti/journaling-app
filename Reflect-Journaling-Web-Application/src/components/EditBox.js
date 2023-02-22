import { useState } from "react";

export default function EditBox({
  CurrentArticle: currentArticle,
  editArticleREACT,
  setEditing,
}) {
  const [editedBodyText, setEditedBodyText] = useState(currentArticle.body);

  return (
    <div>
      <textarea
        className="edit_box"
        id="editedTextBox"
        type="text"
        rows="8"
        value={editedBodyText}
        placeholder="Type to edit text"
        onChange={(e) => setEditedBodyText(e.target.value)}
      />
      <button
        className="Edit_Button"
        onClick={() => {
          setEditing(false);
          editArticleREACT(currentArticle.id, editedBodyText);
        }}
      >
        Save
      </button>
    </div>
  );
}
