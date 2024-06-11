import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const [isHeartClicked, setIsHeartClicked] = useState(Array(5).fill(false));
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(Array(5).fill(false));

  const handleHeartClick = (index) => {
    const updatedHeartClicks = [...isHeartClicked];
    updatedHeartClicks[index] = !updatedHeartClicks[index];
    setIsHeartClicked(updatedHeartClicks);
  };

  const handleBookmarkClick = (index) => {
    const updatedBookmarkClicks = [...isBookmarkClicked];
    updatedBookmarkClicks[index] = !updatedBookmarkClicks[index];
    setIsBookmarkClicked(updatedBookmarkClicks);
  };


  return (
    <div className='max-w-full overflow-x-auto'>
      {/* Main content */}
      <div className="flex flex-col items-center">
        {/* Feed */}
        <div className="w-screen flex flex-col items-center">
          {/* Stories */}
          <div className="bg-white p-4 mb-4 rounded-lg shadow-sm w-full overflow-x-auto">
            <div className="flex space-x-4 overflow-x-auto whitespace-nowrap">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center w-20 flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/60"
                    alt={`Story ${i}`}
                    className="rounded-full border-2 border-red-500"
                  />
                  <span className="text-xs mt-2">User {i}</span>
                </div>
              ))}
            </div>
          </div>

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
                <span>⋮</span>
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
                  </div>
                  <span
                    onClick={() => handleBookmarkClick(i)}
                    className={`cursor-pointer ${
                      isBookmarkClicked[i] ? 'text-red-500' : 'text-gray-400'
                    }`}
                  >
                    <FontAwesomeIcon icon={faBookmark} />
                  </span>
                </div>
                <div>
                  <span className="font-bold">User {i}</span>
                  <span className="ml-2">This is an example caption for post {i}.</span>
                </div>
                <div className="text-gray-500 text-sm mt-2">View all 10 comments</div>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full bg-gray-100 p-2 rounded-lg text-sm"
                  />
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
