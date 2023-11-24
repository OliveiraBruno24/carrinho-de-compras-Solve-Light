import {vi} from 'vitest';
import { ShoppingCartContextTypes } from '../types';
const mockShoppingCartProvider = () => {
  vi.mock( 'useState', (initialValue) => {
    return [initialValue, vi.fn()];
  });

  const mockContextValue: ShoppingCartContextTypes = {
    product: '',
    setProduct: vi.fn(),
    price: '',
    setPrice: vi.fn(),
    listProducts: [],
    setlistProducts: vi.fn(),
    total: 0,
    setTotal: vi.fn(),
    notasNecessarias: [],
    setNotasNecessarias: vi.fn(),
    notasMinimas: vi.fn(),
  };


  return mockContextValue;
};

export default mockShoppingCartProvider;
