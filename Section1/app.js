console.log('Hello Script');

const app = Vue.createApp({
  data() {
    return {
      url: 'https://google.com',
      showBooks: true,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0,
      books: [
        { title: 'Book 1', author: 'Fernando', isFav: true },
        { title: 'Book 2', author: 'Emiliano', isFav: false },
        { title: 'Book 3', author: 'Gustavo', isFav: true },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    showTitle() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount('#app');
