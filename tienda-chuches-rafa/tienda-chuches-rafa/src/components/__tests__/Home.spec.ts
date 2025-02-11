import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Home from '@/views/Home.vue';
import { useProductsStore } from '@/store/products';

// Mockeamos el store
vi.mock('@/store/products', () => ({
  useProductsStore: () => ({
    products: [
      { id: '1', name: 'Gominolas', price: 2.5, image: 'https://via.placeholder.com/150' },
    ],
    fetchProducts: vi.fn(),
  }),
}));

describe('Home.vue', () => {
  it('carga y muestra los productos', () => {
    const wrapper = mount(Home);
    expect(wrapper.text()).toContain('Gominolas');
  });
});
