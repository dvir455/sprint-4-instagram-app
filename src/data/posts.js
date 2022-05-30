export const Posts = [
  {
    _id: '0',
    txt: 'Best trip ever',
    imgUrl: 'one',
    createdAt: 123543452,
    by: {
      _id: 'u101',
      fullname: 'Dvir Yomtovian',
      imgUrl: './images/by.jpg',
    },
    loc: {
      lat: 11.11,
      lng: 22.22,
      name: 'Tel Aviv',
    },
    comments: [
      {
        id: 'c1001',
        by: {
          _id: 'u105',
          fullname: 'Bob',
          imgUrl: 'http://some-img',
        },
        txt: 'good one!',
        likedBy: [
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
      {
        id: 'd1001',
        by: {
          _id: 'b105',
          fullname: 'Ahmed',
          imgUrl: 'http://some-img',
        },
        txt: 'Amazing!',
        likedBy: [
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
    ],
    likedBy: [
      {
        _id: 'das',
        fullname: 'Bob',
        imgUrl: 'http://some-img',
      },
      {
        _id: 'u106',
        fullname: 'Dob',
        imgUrl: 'http://some-img',
      },
    ],
    tags: ['fun', 'kids'],
  },
  {
    _id: '1',
    txt: 'Best trip ever',
    imgUrl: 'two',
    createdAt: 123543452,
    by: {
      _id: 'u101',
      fullname: 'Dvir Yomtovian',
      imgUrl: './images/by.jpg',
    },
    loc: {
      lat: 11.11,
      lng: 22.22,
      name: 'Tel Aviv',
    },
    comments: [
      {
        id: 'c1001',
        by: {
          _id: 'u105',
          fullname: 'Bob',
          imgUrl: 'http://some-img',
        },
        txt: 'good one!',
        likedBy: [
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
      {
        id: 'd1001',
        by: {
          _id: 'b105',
          fullname: 'Ahmed',
          imgUrl: 'http://some-img',
        },
        txt: 'Amazing!',
        likedBy: [
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
    ],
    likedBy: [
      {
        _id: 'u105',
        fullname: 'Bob',
        imgUrl: 'http://some-img',
      },
      {
        _id: 'u106',
        fullname: 'Dob',
        imgUrl: 'http://some-img',
      },
    ],
    tags: ['fun', 'kids'],
  },
  {
    _id: '2',
    txt: 'Best trip ever',
    imgUrl: 'three',
    createdAt: 123543452,
    by: {
      _id: 'u101',
      fullname: 'Dvir Yomtovian',
      imgUrl: './images/by.jpg',
    },
    loc: {
      lat: 11.11,
      lng: 22.22,
      name: 'Tel Aviv',
    },
    comments: [
      {
        id: 'c1001',
        by: {
          _id: 'u105',
          fullname: 'Bob',
          imgUrl: 'http://some-img',
        },
        txt: 'good one!',
        likedBy: [
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
      {
        id: 'd1001',
        by: {
          _id: 'b105',
          fullname: 'Ahmed',
          imgUrl: 'http://some-img',
        },
        txt: 'Amazing!',
        likedBy: [
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
    ],
    likedBy: [
      {
        userId: 5,
        _id: 'u105',
        fullname: 'Bob',
        imgUrl: 'http://some-img',
      },
      {
        _id: 'u106',
        fullname: 'Dob',
        imgUrl: 'http://some-img',
      },
    ],
    tags: ['fun', 'kids'],
  },
];
