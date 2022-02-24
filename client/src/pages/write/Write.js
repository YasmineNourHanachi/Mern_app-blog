import "./write.css";
import writeimg from "../../assests/writeimg.jpg";

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src={writeimg} alt="img post" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autofocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell us about your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
