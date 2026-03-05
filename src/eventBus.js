if (!window.eventBus) {
  const listeners = {};

  window.eventBus = {
    emit(event, data) {
      console.log(event, data);
      (listeners[event] || []).forEach((fn) => fn(data));
    },
    on(event, fn) {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(fn);
      return () => {
        listeners[event] = listeners[event].filter((f) => f !== fn);
      };
    },
  };
}

export default window.eventBus;
