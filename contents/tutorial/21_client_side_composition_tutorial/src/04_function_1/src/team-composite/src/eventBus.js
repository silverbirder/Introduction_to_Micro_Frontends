export class EventBus {
    dispatch() {
        document
        .querySelector('team-search-box')
        .addEventListener('submit', (e) => {
          document
          .querySelector('team-product-list')
          .dispatchEvent(new CustomEvent('update', e))
          document
          .querySelector('team-inspire-list')
          .dispatchEvent(new CustomEvent('update', e))
        });
    }
}