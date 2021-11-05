import React, { useState } from "react";

function Restart() {
  console[(toggle, setToggle)] = useState("none");

  return (
    <div id="theModal" className="modal" style={{ display: `${toggle}` }}>
      <div className="modal-content">
        <button type="submit" onClick={(e) => toggleModal(e)}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Restart;
