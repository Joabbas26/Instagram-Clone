import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const [isHeartClicked, setIsHeartClicked] = useState(Array(5).fill(false));
  const [showComments, setShowComments] = useState(Array(5).fill(false));

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
    <div className='max-w-full overflow-x-auto'>
      {/* Main content */}
      <div className="flex flex-col items-center">
        {/* Feed */}
        <div className="w-screen flex flex-col items-center mt-6">

           {/* Posts */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-white mb-4 rounded-lg shadow-sm">
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt={`User ${i}`}
                    className="rounded-full"
                  />
                  <span className="font-bold">User {i}</span>
                </div>
              </div>
              <img
                src="https://via.placeholder.com/600x400"
                alt={`Post ${i}`}
                className="w-full"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex space-x-4">
                    <span
                      onClick={() => handleHeartClick(i)}
                      className={`cursor-pointer ${
                        isHeartClicked[i] ? 'text-red-500' : 'text-gray-400'
                      }`}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <span
                      onClick={() => handleCommentClick(i)}
                      className="cursor-pointer text-gray-400"
                    >
                      <FontAwesomeIcon icon={faComment} />
                    </span>
                  </div>
                  <span>{`${i} Likes`}</span>
                </div>
                <div>
                  <span className="font-bold">User {i}</span>
                  <span className="ml-2">This is an example caption for post {i}.</span>
                </div>
                <p className="cursor-pointer underline text-gray-500 text-sm mt-2" 
                onClick={() => handleCommentClick(i)}>
                {showComments[i] ? 'Hide comments' : 'View all comments'}
                </p>
                {showComments[i] && (
                  <div className="mt-2">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <div key={index} className="flex items-start space-x-2 my-2">
                        <img
                          src="https://via.placeholder.com/30"
                          alt={`Commenter ${index}`}
                          className="rounded-full"
                        />
                        <div>
                          <span className="font-bold">Commenter {index}</span>
                          <span className="ml-2">This is a comment {index}.</span>
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
