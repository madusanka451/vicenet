document.addEventListener('DOMContentLoaded', function() {
    const allFriendButton = document.querySelector('.all-friend-txt');
    const friendReqButton = document.querySelector('.friend-req-txt');
    const allFriendsContainer = document.querySelector('.all-friends-container');
    const friendReqContainer = document.querySelector('.friend-req-container');
    
    // allFriendsContainer.style.display = 'block';
    // friendReqContainer.style.display = 'none';

    allFriendsContainer.style.display = 'none';
    friendReqContainer.style.display = 'block';
    
    allFriendButton.addEventListener('click', function(event) {
      event.preventDefault();
      allFriendsContainer.style.display = 'block';
      friendReqContainer.style.display = 'none';
    });
    
    friendReqButton.addEventListener('click', function(event) {
      event.preventDefault();
      allFriendsContainer.style.display = 'none';
      friendReqContainer.style.display = 'block';
    });
  });