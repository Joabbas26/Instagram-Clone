import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Main content */}
      <div className="max-w-5xl mx-auto pt-4 flex">
        {/* Feed */}
        <div className="w-8/12">
          {/* Stories */}
          <div className="bg-white p-4 mb-4 rounded-lg shadow-sm">
            <div className="flex space-x-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
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
                    <span>❤️</span>
                    <span>💬</span>
                    <span>📤</span>
                  </div>
                  <span>🔖</span>
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