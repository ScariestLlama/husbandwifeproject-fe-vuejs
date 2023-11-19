/*import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';

// Create a factory function to create a wrapper with specific properties
const factory: HelloWorld | any = (values = {}) => {
  return shallowMount(HelloWorld, {
    mocks: {
      // Mock your Vuex store here
      $store: {
        state: {
          count: 0
        },
        commit: jest.fn(), // Mock your commit function
        dispatch: jest.fn() // Mock your dispatch function
      }
    }
  });
};

const localVue = createLocalVue();
localVue.use(Vuex);

describe('HelloWorld.vue', () => {

  let actions;
  let state;
  let store: Store<any>;;

  beforeEach(() => {
    state = {
      count: 0
    };

    actions = {
      incrementAsync: jest.fn()
    };

    store = new Vuex.Store({
      state,
      actions
      // You may also include getters or mutations if needed
    });
  });
  it('renders the count from state', () => {
    const wrapper = shallowMount(HelloWorld, {
      store,
      localVue
    });
    expect(wrapper.text()).toMatch('Count from state: 0');
  });

  it('calls store action "incrementAsync" when button is clicked', async () => {
    const wrapper = shallowMount(HelloWorld, {
      store,
      localVue
    });
    const button = wrapper.find('button'); // You might need to adjust if you have more than one button
    await button.trigger('click');
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('incrementAsync');
  });

  it('calls store commit "increment" when increment method is called', () => {
    const wrapper = shallowMount(HelloWorld, {
      store,
      localVue
    });
    wrapper.vm.increment();
    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith('increment');
  });

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      store,
      localVue
    });
    expect(wrapper.text()).toMatch(msg)
  })
});*/
