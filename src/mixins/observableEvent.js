const observableEvent = {
  methods: {
    handleObserverEvent(entries) {
      if (entries[0].intersectionRatio <= 0) this.observableActive = false;
      else this.observableActive = true;
    }
  },
  mounted() {
    const intersectionObserver = new IntersectionObserver(this.handleObserverEvent);
    intersectionObserver.observe(this.$el);
  },
}

export { observableEvent };