// Import all product images
import diamondNecklace from "../assets/images/diamond-pendant-necklace.jpg";
import sapphireRing from "../assets/images/sapphire-ring.jpg";
import pearlEarrings from "../assets/images/pearl-earrings.jpg";
import goldBracelet from "../assets/images/gold-bracelet.jpg";
import silverNecklace from "../assets/images/silver-chain-necklace.jpg";
import diamondEarrings from "../assets/images/diamond-stud-earrings.jpg";
import weddingBand from "../assets/images/gold-wedding-band.jpg";
import charmBracelet from "../assets/images/charm-bracelet.jpg";
import rubyPendant from "../assets/images/ruby-pendant.jpg";
import emeraldRing from "../assets/images/emerald-ring.jpg";
import tennisBracelet from "../assets/images/diamond-tennis-bracelet.jpg";
import hoopEarrings from "../assets/images/hoop-earrings.jpg";

// Create an image map for easy lookup
export const productImages = {
  1: diamondNecklace,
  2: sapphireRing,
  3: pearlEarrings,
  4: goldBracelet,
  5: silverNecklace,
  6: diamondEarrings,
  7: weddingBand,
  8: charmBracelet,
  9: rubyPendant,
  10: emeraldRing,
  11: tennisBracelet,
  12: hoopEarrings
};

// Helper function to get product image
export const getProductImage = (productId) => {
  return productImages[productId] || null;
};