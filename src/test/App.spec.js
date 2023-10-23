//App.spec.js - Teste Unitário

import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('incrementar o contador ao clicar', () => {
    const wrapper = shallowMount(App); //método que serve para renderização de componentes

    wrapper.find('button').trigger('click');

    expect(wrapper.vm.count).toBe(1);
  }); // verificando se o contador é incrementado.

  it('decrementar o contador ao clicar', () => {
    const wrapper = shallowMount(App); //método que serve para renderização de componentes
    wrapper.setData({ count: 2 });

    wrapper.find('button:nth-child(2)').trigger('click');

    expect(wrapper.vm.count).toBe(1);
  }); // verificando se o contador e decrementado.

  it('displays correct count', () => {
    //exibe a contagem correta
    const wrapper = shallowMount(App); //método que serve para renderização de componentes

    expect(wrapper.find('h1').text()).toBe('Contador: 0');

    wrapper.setData({ count: 5 });

    expect(wrapper.find('h1').text()).toBe('Contador: 5');
  }); // verificando se a contagem e exibida corretamente | Primeiro verificado o valor 0 | Depois com um valor de 5.
});
// Os testes são feitos com um fremework @vue/test-utils.
//
