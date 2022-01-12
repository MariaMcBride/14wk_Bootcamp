import React, { useState } from "react";

const BoxForm = (props) => {
  const [newColor, setNewColor] = useState("");
  const [newSize, setNewSize] = useState("");

  const [listBoxes, setListBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListBoxes([...listBoxes, { color: newColor, size: newSize + "px" }]);
    console.log(listBoxes);
    setNewColor("");
    setNewSize("");
  }

  return (
    <>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label for="boxColor" className="form-control-plaintext">Color</label>
        </div>
        <div className="col-auto">
          <input onChange={(e) => { setNewColor(e.target.value); }} type="text" className="form-control" name="newColor" value={newColor} />
        </div>
        <div className="col-auto">
          <label for="boxSize" className="form-control-plaintext">Size</label>
        </div>
        <div className="col-auto">
          <input onChange={(e) => { setNewSize(e.target.value); }} type="number" className="form-control" name="newSize" value={newSize} />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-light mb-3">Add</button>
        </div>
      </form>
      <div className="row justify-content-evenly">
        {
          listBoxes.map((box, i) => {
            let style = { backgroundColor: box.color, width: box.size, height: box.size }
            return (
              <div key={i} style={style}></div>
            );
          })
        }
      </div>
    </>
  );
}

export default BoxForm;