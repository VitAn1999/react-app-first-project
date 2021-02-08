import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/800px-Green_Bay_Packers_logo.svg.png"
          alt="logo"
          className="header__img"
        />
        <p className="header__title">Some Social Network</p>
      </header>
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
          <h3 className="content__post-title">My posts</h3>
          <input type="text" className="content__post-input" />
          <article className="content__my-post">Post #1</article>
          <article className="content__my-post">Post #2</article>
        </div>
      </main>
      <aside className="nav-bar">
        <ul className="nav-bar__list">
          <li className="nav-bar__elem">
            <a href="#" className="nav-bar__link">
              Profile
            </a>
          </li>
          <li className="nav-bar__elem">
            <a href="#" className="nav-bar__link">
              Messages
            </a>
          </li>
          <li className="nav-bar__elem">
            <a href="#" className="nav-bar__link">
              News
            </a>
          </li>
          <li className="nav-bar__elem">
            <a href="#" className="nav-bar__link">
              Music
            </a>
          </li>
          <li className="nav-bar__elem_setting">
            <a href="#" className="nav-bar__link">
              Settings
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default App;
