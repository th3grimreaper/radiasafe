import { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

export function WishlistButton() {
  const [liked, setLiked] = useState(false);

  const toggleWishlist = () => {
    setLiked((prev) => !prev);
  };

  return (
    <button
      onClick={toggleWishlist}
      className="flex items-center space-x-2 border-1 rounded-full px-4 mt-2 bg-white hover:bg-gray-100 transition-colors shadow-sm"
      aria-label="Add to wishlist"
    >
      {liked ? (
        <Heart className="text-red-500 fill-red-500 w-4 h-4" />
      ) : (
        <HeartOff className="text-gray-500 w-4 h-4" />
      )}
      <span className="text-sm font-semibold text-gray-700">
        {liked ? "Wishlisted" : "Wishlist"}
      </span>
    </button>
  );
}

export default WishlistButton