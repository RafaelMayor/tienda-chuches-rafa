import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Cart from '@/views/Cart.vue';
import { useCartStore } from '@/store/cart';
import { useAuthStore } from '@/store/auth';

// Mockeamos los stores
vi.mock('@/store/cart', () => ({
  useCartStore: () => ({
    cart: [
      { id: '1', name: 'Gominolas', price: 2.5, quantity: 2, stock: 10 },
    ],
    removeFromCart: vi.fn(),
    purchase: vi.fn(),
  }),
}));

vi.mock('@/store/auth', () => ({
  useAuthStore: () => ({
    user: { id: '123', credit: 3000 },
  }),
}));

describe('Cart.vue', () => {
  it('muestra los productos en el carrito', () => {
    const wrapper = mount(Cart);
    expect(wrapper.text()).toContain('Gominolas');
    expect(wrapper.text()).toContain('€2.50');
  });

  it('ejecuta la compra al presionar el botón', async () => {
    const cartStore = useCartStore();
    const wrapper = mount(Cart);

    await wrapper.find('button.btn-pink').trigger('click');

    expect(cartStore.purchase).toHaveBeenCalled();
  });
});
