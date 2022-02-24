import "./post.css";
import imgpost from "../assests/imgpost.jpg";

const Post = () => {
  return (
    <div className="Post">
      <img className="postImg" src={imgpost} alt="img gaming" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCats">Gaming</span>
          <span className="postCats">Life</span>
        </div>
        <span className="postTitle">lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDesc">
        Irure ut elit velit nostrud ex voluptate eu reprehenderit anim. Anim
        enim do exercitation aute quis in sint aliqua sunt irure. Enim amet duis
        commodo pariatur qui irure sint deserunt ex. Ad deserunt consectetur
        laborum commodo id mollit. Irure ut elit velit nostrud ex voluptate eu
        reprehenderit anim. Anim enim do exercitation aute quis in sint aliqua
        sunt irure. Enim amet duis commodo pariatur qui irure sint deserunt ex.
        Ad deserunt consectetur laborum commodo id mollit. Irure ut elit velit
        nostrud ex voluptate eu reprehenderit anim. Anim enim do exercitation
        aute quis in sint aliqua sunt irure. Enim amet duis commodo pariatur qui
        irure sint deserunt ex. Ad deserunt consectetur laborum commodo id
        mollit. Irure ut elit velit nostrud ex voluptate eu reprehenderit anim.
        Anim enim do exercitation aute quis in sint aliqua sunt irure. Enim amet
        duis commodo pariatur qui irure sint deserunt ex. Ad deserunt
        consectetur laborum commodo id mollit.
      </p>
    </div>
  );
};

export default Post;
