import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ProductCartInterfese {
  id: number;
  title: string;
  price: number;
  count?: number;
}

interface CardStateInterfese {
  products: ProductCartInterfese[];
}

const initialState: CardStateInterfese = {
  products: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductCartInterfese[]>) => {
      return { ...state, products: action.payload };
    },
    addProducts: (state, action: PayloadAction<ProductCartInterfese>) => {
      const productIndex = state.products.findIndex(
        ({ id }) => id === action.payload.id
      );

      const product = state.products[productIndex];

      if (productIndex > -1) {
        state.products[productIndex] = {
          ...product,
          count: product.count ? product.count + 1 : 0,
        };

        return state;
      }

      action.payload.count = 1;

      return { ...state, products: [...state.products, action.payload] };
    },
  },
});

export const { setProducts, addProducts } = cardSlice.actions;

export const selectProducts = (state: RootState) => state.card.products;

export default cardSlice.reducer;
