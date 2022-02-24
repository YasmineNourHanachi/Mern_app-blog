import "./singlePost.css";
import imgpost from "../../assests/imgpost.jpg";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={imgpost} alt="Gaming zone" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Eu nulla sunt voluptate irure.
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-solid fa-user-pen"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author : Yassou</span>
          <span className="singlePostDate">1 Hour Ago..</span>
        </div>
        <p className="singlePostDesc">
          Esse occaecat incididunt anim commodo exercitation voluptate occaecat
          consequat qui id. Id ea non exercitation occaecat elit elit sunt nisi
          occaecat. Aliquip nostrud velit nostrud enim exercitation amet sint
          elit veniam enim. Exercitation voluptate sit fugiat veniam nisi duis
          elit nostrud anim. Amet consequat aute exercitation ullamco
          reprehenderit ipsum quis velit aliquip nulla sunt. Fugiat anim amet
          nisi eiusmod Lorem ut esse. Quis duis reprehenderit minim do. Ea elit
          aliquip deserunt deserunt qui consequat reprehenderit amet laboris
          aute. Exercitation enim minim minim ipsum nulla labore ipsum duis
          consequat est pariatur ut sunt. Aute occaecat magna irure culpa
          adipisicing cillum pariatur culpa deserunt cupidatat ut. Ullamco id
          nostrud exercitation magna ea. Deserunt aute in nostrud qui nisi velit
          sunt ut tempor labore voluptate tempor sit consectetur. Deserunt
          ullamco tempor excepteur dolore reprehenderit esse. Ad quis minim
          proident fugiat cupidatat laborum tempor tempor quis veniam. In anim
          ea excepteur voluptate laboris duis est do. Fugiat minim ex duis
          nostrud sit amet ipsum consectetur irure eiusmod ad dolor. Sit elit
          exercitation tempor qui ex laborum labore laborum culpa minim et
          incididunt eu. Sunt non nulla aliquip fugiat excepteur anim pariatur
          sunt ullamco exercitation.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
