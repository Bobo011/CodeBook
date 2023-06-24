export const Rating = ({ rating }) => {
    // Create an array of length 5 and fill it with false values
    let ratingArray = Array(5).fill(false);
  
    // Iterate up to the given rating value and set the corresponding indices in the array to true
    for (let i = 0; i < rating; i++) {
      ratingArray[i] = true;
    }
  
    return (
      <>
        {/* Map over the ratingArray */}
        {ratingArray.map((value, index) => (
          // If the value is true, render a filled star icon
          // Otherwise, render an empty star icon
          value ? (
            <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          ) : (
            <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
          )
        ))}
      </>
    );
  };
  