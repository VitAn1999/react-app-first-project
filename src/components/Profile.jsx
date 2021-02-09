const Profile = () => {
  return (
    <main className="content">
      <div className="content__image-wrapper">
        <img
          src="https://klike.net/uploads/posts/2019-01/1548057229_3.jpg"
          alt="обои"
          className="content__image"
        />
      </div>

      <img
        src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
        alt="аватар"
        className="content__photo"
      />
      <div className="content__title">
        <p className="content__name">Name Surname</p>
        <ul className="content__about">
          <li className="content__about-prop">City:</li>
          <li className="content__about-prop">Country:</li>
          <li className="content__about-prop">Job:</li>
          <li className="content__about-prop">Telephone:</li>
        </ul>
      </div>

      <div className="content__post">
        <label className="content__post-title" for="input-post">
          My posts
        </label>
        <input type="text" id="input-post" className="content__post-input" />
        <button>Public post</button>
        <article className="content__my-post">Post #1</article>
        <article className="content__my-post">Post #2</article>
      </div>
    </main>
  );
};

export default Profile;
