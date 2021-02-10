import classes from './Post.module.css';

const Post = (props) => {
  return (
    <article className={classes.article}>
      <img
        className={classes.article__img}
        src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
        alt="аватар"
      />
      <p className={classes.article__post}>
        {props.text}
        <span className={classes.article__like}>
          <span>{props.count}</span>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F50%2FFacebook_Thumb_icon.svg%2F1200px-Facebook_Thumb_icon.svg.png&f=1&nofb=1"
            alt="like"
          />
        </span>
      </p>
    </article>
  );
};

export default Post;
