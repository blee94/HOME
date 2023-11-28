프로젝트 소개

프로젝트명
MovieCaster

프로젝트 설명
무비캐스터는 영화를 사랑하는 이들을 위한 리뷰 웹사이트로, 다양한 영화에 대한 정보를 제공하고 의견을 공유할 수 있는 플랫폼입니다.  
웹사이트 방문자는 페이지에서 추천하는 영화 및 검색한 영화의 상세 내용과 해당 영화에 남겨진 다른 회원들의 리뷰를 읽어볼수 있습니다.  
회원가입 시 직접 리뷰를 작성하고 다른 회원이 작성한 리뷰 및 자신이 마음에 드는 영화에 좋아요를 눌러 마이페이지에서 관리할 수 있습니다.  
TMDB(The Movie Database)에서 영화 정보 api를 받아와 MySql 데이터 베이스에 저장했으며 미리 작성된 테이블의 고유키와 외례키를 이용해 회원이 상호작용한 결과값을 저장했습니다.

프로젝트 설치 및 설정
이 프로젝트는 Node.js를 사용하여 개발되었으며, 다음과 같은 패키지를 사용합니다:
axios: v_1.6.1,
crypto: v_1.0.1,
dotenv: v_16.3.1,
ejs: v_3.1.9,
express: v_4.18.2,
express-session: v_1.17.3,
jquery: v_3.7.1,
multer: v_1.4.4,
mysql2: v_3.6.3,
nodemon: v_3.0.1,
sequelize: v_6.35.0,
sequelize-cli: v_6.6.2

기술스택
FrontEnd  
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)  
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

BackEnd  
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Database  
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)  
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

디렉토리 구조  
4FLEX/  
├── config/  
│ ├── envs/  
│ │ └── key.env  
│ └── config.json  
├── controller/  
│ ├── CDetail.js  
│ ├── CFindid.js  
│ ├── CFindpw.js  
│ ├── CGetMovies.js  
│ ├── CMain.js  
│ ├── CMypage.js  
│ ├── CSearch.js  
│ ├── CSignin.js  
│ ├── CSignup.js  
│ ├── CUser.js  
│ └── dummyCmt.js  
├── model/  
│ ├── Comment.js  
│ ├── CommentLike.js  
│ ├── FavMovie.js  
│ ├── getMovie.js  
│ ├── index.js  
│ ├── MovieInfo.js  
│ ├── MovieLike.js  
│ └── User.js  
├── node_modules/  
├── routes/  
│ ├── datail.js  
│ ├── findid.js  
│ ├── findpw.js  
│ ├── indes.js  
│ ├── mypage.js  
│ ├── search.js  
│ ├── signin.js  
│ ├── signout.js  
│ └── signup.js  
├── static/  
│ ├── css/  
│ │ ├── mypage/  
│ │ │ ├── mypage.css  
│ │ │ ├── mypageComment.css  
│ │ │ ├── mypageFav.css  
│ │ │ └── mypageMovieLike.css  
│ │ ├── detail.review.css  
│ │ ├── detail.css  
│ │ ├── findid.css  
│ │ ├── findpw.css  
│ │ ├── footer.css  
│ │ ├── header.css  
│ │ ├── index.css  
│ │ ├── main.css  
│ │ ├── search.css  
│ │ ├── signin.css  
│ │ └── signup.css  
│ └── img/  
├── uploads/  
├── views/  
│ ├── mypage/  
│ │ ├── mypage.ejs  
│ │ ├── mypageComment.ejs  
│ │ ├── mypageCommentLike.ejs  
│ │ ├── mypageFav.ejs  
│ │ ├── mypageInfo.ejs  
│ │ └── mypageMovieLike.ejs  
│ ├── detail.ejs  
│ ├── findid.ejs  
│ ├── findpw.ejs  
│ ├── footer.ejs  
│ ├── header.ejs  
│ ├── main.ejs  
│ ├── search.ejs  
│ ├── signin.ejs  
│ └── signup.ejs  
├── .gitignore  
├── index.js  
├── package-lock.json  
├── package.json  
└── README.md
