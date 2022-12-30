interface EventInput {
    name: string;
    category?: string;
    action: string;
    element?: string[];
    label?: string[];
  }
  declare global {
    interface Window {
      digitalData: any;
    }
  }
  export default function ddmEvent(obj: EventInput) {
    const { name, category = 'user click', action, element = [] } = obj;
    if (window.digitalData && window.digitalData.product) {
      const { id } = window.digitalData.product;
      window.digitalData.events.push({
        name,
        category,
        action: `${action} on ${window.location.hostname}${window.location.pathname} page`,
        label: `timestamp:${(Date.now() / 10000).toFixed()},buttonClass:${element.toString()}`,
        productId: id,
      });
    }
  }
  