import { IProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PcBuilderState {
  cpu_processor: IProduct | null;
  motherboard: IProduct | null;
  ram: IProduct | null;
  power_supply_unit: IProduct | null;
  storage_device: IProduct | null;
  monitor: IProduct | null;
  others: IProduct | null;
}

const initialState: PcBuilderState = {
  cpu_processor: null,
  motherboard: null,
  ram: null,
  power_supply_unit: null,
  storage_device: null,
  monitor: null,
  others: null,
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    setProduct: (
      state: PcBuilderState,
      action: PayloadAction<{ product: IProduct; category: string }>
    ) => {
      const { product, category } = action.payload;
      state[category as keyof PcBuilderState] = product;
    },
    removeProduct: (
      state: PcBuilderState,
      action: PayloadAction<{ category: string }>
    ) => {
      const { category } = action.payload;
      state[category as keyof PcBuilderState] = null;
    },
  },
});

export const { setProduct, removeProduct } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
