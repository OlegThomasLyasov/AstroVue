const scrollTo = {
  methods: {
    scrollTo(to, yOffset = -90, behavior = 'smooth') {
      //if (to === '#header') document.querySelector('#__nuxt').scrollIntoView({ behavior: 'smooth' });
      let el = document.querySelector(to);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior });
        if (to.includes('#form')) {
          if (!el.querySelector('input')) el = el.closest('section');
          setTimeout(() => {
            el.querySelector('input').focus();
          }, 1000);
        }
      }
    },
  },
};

export default scrollTo;
