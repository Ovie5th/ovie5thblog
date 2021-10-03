import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <div className="writeImgCont">
        <img className="writeImg" src="images/back.jpg" alt="" />
      </div>
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            placeholder="Let the world hear your story"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
