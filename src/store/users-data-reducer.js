let initialState = {
  users: [
    {
      id: 1,
      userName: 'Anton',
      src: 'https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg',
    },
    {
      id: 2,
      userName: 'Viktor',
      src: 'https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b',
    },
    {
      id: 3,
      userName: "Ales'",
      src: 'https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg',
    },
    {
      id: 4,
      userName: 'Joshua',
      src: 'https://i.pinimg.com/736x/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg',
    },
  ],
};

const userDataReducer = (state = initialState, action) => {
  return state;
};

export default userDataReducer;