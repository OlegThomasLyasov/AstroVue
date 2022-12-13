import vue, { reactive } from 'vue';

const vue3 = vue.createApp({});

vue3.directive('focus', {
  created(el) {
    el.focus();
  },
});

let handleOutsideClick: (T: MouseEvent | TouchEvent) => void;
vue3.directive('click-outside', {
  mounted(el, binding, vnode) {
    handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      e.stopPropagation();
      // const { expression } = binding;
      // if (!el.contains(e.target as Node)) (vnode.context as any)[expression!]();
    };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
  },

  unmounted() {
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
  },
});

vue3.directive('scroll', {
  created(el, binding) {
    const f = (evt: Event) => {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

vue3.directive('resize', {
  created(el, binding) {
    const f = (evt: Event) => {
      if (binding.value(evt, el)) {
        window.removeEventListener('resize', f);
      }
    };
    window.addEventListener('resize', f);
  },
});
