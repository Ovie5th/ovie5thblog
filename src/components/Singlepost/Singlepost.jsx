import "./singlepost.css";

export default function Singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img src="images/anime.jpg" alt="" className="singlepostImg" />
      </div>
      <div className="singleposttitle">
        <h1 className="singleposttitleheader">Hello World</h1>
        <div className="singlepostEdit">
          <i className="singlepostIcon fas fa-edit"></i>
          <i className="singlepostIcon fas fa-trash-alt"></i>
        </div>
      </div>
      <div className="singlePostInfo">
        <span className="singlepostAuthor">
          Author: <b>Idholo Ovie</b>
        </span>
        <span className="singlepostDate">1 hour ago</span>
      </div>
      <p className="singlepostDesc">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit,audantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit,audantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
        aut odit aut fugit,
        <br /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit,audantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit,
      </p>
    </div>
  );
}
