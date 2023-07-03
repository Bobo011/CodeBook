export const Rating = ({ rating }) => {
    let ratingArray = Array(5).fill(false);
    
    // Set the ratingArray elements to true up to the rating value
    for (let i = 0; i < rating; i++) {
      ratingArray[i] = true;
    }
  
    return (
      <>
        {/* Map over the ratingArray to render star icons */}
        {ratingArray.map((value, index) => (
          value ? (
            // Render a filled star icon for a rated item
            <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          ) : (
            // Render an empty star icon for an unrated item
            <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
          )
        ))}
      </>
    );
  };
  