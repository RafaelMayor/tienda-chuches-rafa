import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '@/components/Navbar.vue';
import { useAuthStore } from '@/store/auth';
import { createRouter, createWebHistory } from 'vue-router';

// Mockeamos el router
const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

vi.mock('@/store/auth', () => ({
  useAuthStore: () => ({
    user: { id: '123', email: 'test@user.com', credit: 2500 },
  }),
}));

describe('Navbar.vue', () => {
  it('muestra el crédito del usuario autenticado', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain('Crédito: €2500');
  });

  it('tiene un botón que lleva al carrito', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    });

    const cartButton = wrapper.find('a[href="/cart"]');
    expect(cartButton.exists()).toBe(true);
  });
});
