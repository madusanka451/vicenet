// //for like button
// const button = document.getElementById('likeButton');
// const img = button.querySelector('img');
// let isLiked = false;

// button.addEventListener('click', () => {
//   if (isLiked) {
//     img.src = 'icon/like.png';
//     isLiked = false;
//   } else {
//     img.src = 'icon/liked.png';
//     isLiked = true;
//   }
//   // Send a request to the server to update the like count
// });
// //end for like button
// Get all the like buttons


// const buttons = document.querySelectorAll('.likeButton');

// buttons.forEach((button) => {
//   const img = button.querySelector('img');
//   let isLiked = false;

//   button.addEventListener('click', () => {
//     if (isLiked) {
//       img.src = 'icon/like.png';
//       isLiked = false;
//     } else {
//       img.src = 'icon/liked.png';
//       isLiked = true;
//     }
//     // Send a request to the server to update the like count
//   });
// });

const buttons = document.querySelectorAll('.likeButton');

  buttons.forEach((button) => {
    const img = button.querySelector('img');
    let isLiked = false;

    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      if (isLiked) {
        img.src = 'icon/like.png';
        isLiked = false;
      } else {
        img.src = 'icon/liked.png';
        isLiked = true;
      }
      // Send a request to the server to update the like count
    });
  });
