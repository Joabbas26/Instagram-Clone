import React from 'react';

const Notifications = () => {
  // Dummy data for notifications
  const notifications = [
    {
      id: 1,
      user: 'user1',
      action: 'liked your photo',
      userProfilePic: 'https://via.placeholder.com/50',
      postImage: 'https://via.placeholder.com/100',
      time: '2h',
    },
    {
      id: 2,
      user: 'user2',
      action: 'commented: "Nice pic!"',
      userProfilePic: 'https://via.placeholder.com/50',
      postImage: 'https://via.placeholder.com/100',
      time: '4h',
    },
    {
      id: 3,
      user: 'user3',
      action: 'started following you',
      userProfilePic: 'https://via.placeholder.com/50',
      time: '1d',
    },
    // Add more dummy notifications as needed
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={notification.userProfilePic}
                alt={notification.user}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <span className="font-bold">{notification.user}</span> {notification.action}
                <div className="text-gray-500 text-sm">{notification.time}</div>
              </div>
            </div>
            {notification.postImage && (
              <img
                src={notification.postImage}
                alt="Post"
                className="w-16 h-16 rounded-lg"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
