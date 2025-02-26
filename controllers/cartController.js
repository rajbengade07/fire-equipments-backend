import userModel from "../models/userModel.js";

// Add to user cart  
const addToCart = async (req, res) => {
   try {
      let userData = await userModel.findById(req.body.userId);
      let cartData = userData.cartData || {};  // Initialize cartData if it doesn't exist

      // Increment or add the item to the cart
      if (!cartData[req.body.itemId]) {
         cartData[req.body.itemId] = 1;
      } else {
         cartData[req.body.itemId] += 1;
      }

      // Update the user cart
      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Added To Cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error adding to cart" });
   }
};

// Remove food from user cart
const removeFromCart = async (req, res) => {
   try {
      let userData = await userModel.findById(req.body.userId);
      let cartData = userData.cartData || {};  // Initialize cartData if it doesn't exist

      // Decrease the quantity if the item exists
      if (cartData[req.body.itemId] && cartData[req.body.itemId] > 0) {
         cartData[req.body.itemId] -= 1;
         if (cartData[req.body.itemId] === 0) {
            delete cartData[req.body.itemId];  // Remove item if quantity reaches zero
         }
      }

      // Update the user cart
      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Removed From Cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error removing from cart" });
   }
};

// Get user cart
const getCart = async (req, res) => {
   try {
      let userData = await userModel.findById(req.body.userId);
      let cartData = userData.cartData || {};  // Return an empty object if cartData is missing
      res.json({ success: true, cartData });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error fetching cart" });
   }
};

export { addToCart, removeFromCart, getCart };

