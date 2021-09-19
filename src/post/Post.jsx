import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <div className="postImgdiv">
                <img className="postImg" src="images/anime.jpg" alt="" />
            </div>

            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Anime</span>
                    <span className="postCategory">Movie</span>
                </div>
                <span className="postTitle">Hello World</span>
                <hr />
                <span className="postDate">1 Hour Ago</span>
                <div className="postDesc">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                        voluptas sit aspernatur aut odit aut fugit,audantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                        voluptas sit aspernatur aut odit aut fugit, </p>
                </div>
            </div>

        </div>
    );
}
