import classes from './Post.module.css';

const Post = () => {
  return (
    <article className={classes.article}>
      <img
        className={classes.article__img}
        src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
        alt="аватар"
      />
      <p className={classes.article__post}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
        aliquam, ex nulla voluptas inventore labore vel ipsa velit recusandae?
      </p>
    </article>
  );
};

export default Post;
