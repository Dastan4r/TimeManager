export default {
  state: {
     links: [
         {title: 'About Us', url: '/about'},
         {title: 'Contact', url: '/contact'},
         {title: 'Terms of use', url: '/terms'},
         {title: 'Careers', url: '/careers'},
         {title: 'Our Team', url: '/team'}
     ]
  },
  getters: {
      getNavbarLinks (state) {
          return state.links
      }
  }
}