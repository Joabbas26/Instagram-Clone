import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const [isHeartClicked, setIsHeartClicked] = useState(Array(5).fill(false));
  const [showComments, setShowComments] = useState(Array(5).fill(false));
  const [Posts, setPosts] = useState("");



  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error(err);
        console.log(Posts)
      }
    };
    fetchPosts();
  }, []);

  const handleHeartClick = (index) => {
    const updatedHeartClicks = [...isHeartClicked];
    updatedHeartClicks[index] = !updatedHeartClicks[index];
    setIsHeartClicked(updatedHeartClicks);
  };

  const handleCommentClick = (index) => {
    setShowComments((prevShowComments) => {
      const newShowComments = [...prevShowComments];
      newShowComments[index] = !newShowComments[index];
      return newShowComments;
    });
  };

  const handleComment = () => {
    // handle comment functionality
  }


  return (
    <div className='flex justify-center items-center'>
      {/* Main content */}
      <div className="flex flex-col items-center md:w-1/2">
        {/* Feed */}
        <div className="flex flex-col items-center m-6">

           {/* Posts */}
          {Posts.map((post) => (
            <div key={post.id} className="bg-white mb-4 rounded-lg shadow-sm">
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={`${post.image}`}
                    alt={`User ${post.user}`}
                    className="rounded-full h-8 w-8"
                  />
                  <span className="font-bold">{post.user.username}</span>
                </div>
              </div>
              <div className='flex justify-center p-3'>
                <img
                src={`${post.image}`}
                alt={`Post ${post.user}`}
                className="h-1/3"
              />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex space-x-4">
                    <span
                      onClick={() => handleHeartClick(post.user.like)}
                      className={`cursor-pointer ${
                        isHeartClicked[post.id] ? 'text-red-500' : 'text-gray-400'
                      }`}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <span
                      onClick={() => handleCommentClick(post.comment)}
                      className="cursor-pointer text-gray-400"
                    >
                      <FontAwesomeIcon icon={faComment} />
                    </span>
                  </div>
                  <span>{`${post.likes} Likes`}</span>
                </div>
                <div>
                  <span className="font-bold">User {post.user}</span>
                  <span className="ml-2">This is an example caption for post {post.caption}.</span>
                </div>
                <p className="cursor-pointer underline text-gray-500 text-sm mt-2" 
                onClick={() => handleCommentClick(post.comment)}>
                {showComments[post.comments] ? 'Hide comments' : 'View all comments'}
                </p>
                {showComments[post.comments] && (
                  <div className="mt-2">
                    {Array.from({ length: 1 }).map((_, index) => (
                      <div key={index} className="flex items-start space-x-2 my-2">
                        <img
                          src="https://cdn.pixabay.com/photo/2023/08/08/10/50/hot-wheels-8177051_1280.jpg"
                          alt={`Commenter ${index}`}
                          className="rounded-full h-1/6 w-1/5"
                        />
                        <div>
                          <span className="font-bold">Commenter {index}</span>
                          <span className="ml-2">{`${post.comment}`}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="bg-gray-100 p-2 rounded-lg text-sm w-10/12 md:w-11/12"
                  />
                  <button className='mx-3 text-gray-600' onClick={handleComment()}>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
