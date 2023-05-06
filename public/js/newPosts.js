const newFormHandler = async (event) => {
  event.preventDefault();

  const shopName = document.querySelector('#shop-name').value.trim();
  const tacoType = document.querySelector('#taco-type').value.trim();
  const rating = document.querySelector('#rating').value.trim();
  const comments = document.querySelector('#comments').value.trim();


  if (shopName && tacoType && rating && comments) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ shopName, tacoType, rating, comments }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
