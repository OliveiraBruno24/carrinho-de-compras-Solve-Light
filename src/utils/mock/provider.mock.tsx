import {vi} from 'vitest';
import { ShoppingCartContextTypes } from '../types';

export const mockContextValue: ShoppingCartContextTypes = {
  product: '',
  setProduct: vi.fn(),
  price: '',
  setPrice: vi.fn(),
  listProducts: [],
  setlistProducts: vi.fn(),
  total: 0,
  setTotal: vi.fn(),
  requiredballots: [],
  setrequiredballots: vi.fn(),
  minimumBanknotes: vi.fn(),
  handleButtonControl: vi.fn(),
  canAddProduct: false,
  setCanAddProduct: vi.fn()
  };

const mockShoppingCartProvider = () => {
  vi.mock( 'useState', (initialValue) => {
    return [initialValue, vi.fn()];
  });

  return mockContextValue;
};

export default mockShoppingCartProvider;
