import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from '@/components/ProductCard.vue';
import { useCartStore } from '@/store/cart';

// Mockeamos el store
vi.mock('@/store/cart', () => ({
  useCartStore: () => ({
    addToCart: vi.fn(),
  }),
}));

describe('ProductCard.vue', () => {
  it('renderiza correctamente la información del producto', () => {
    const product = {
      id: '1',
      name: 'Gominolas',
      description: 'Dulces de frutas',
      image: 'https://via.placeholder.com/150',
      price: 2.5,
      stock: 10,
    };

    const wrapper = mount(ProductCard, {
      props: { product },
    });

    expect(wrapper.text()).toContain('Gominolas');
    expect(wrapper.text()).toContain('Dulces de frutas');
    expect(wrapper.text()).toContain('€2.50');
  });

  it('agrega el producto al carrito cuando se presiona el botón', async () => {
    const product = {
      id: '1',
      name: 'Gominolas',
      price: 2.5,
      stock: 10,
    };

    const cartStore = useCartStore();
    const wrapper = mount(ProductCard, { props: { product } });

    await wrapper.find('button').trigger('click');

    expect(cartStore.addToCart).toHaveBeenCalledWith(product);
  });
});
