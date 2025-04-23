export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    notificationEnabled: false,
    subscribedProducts: [] as string[]
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage()
  },
  actions: {
    async requestPermission() {
      try {
        const permission = await Notification.requestPermission();
        this.notificationEnabled = permission === 'granted';
        return permission;
      } catch (error) {
        console.error('Error requesting notification permission:', error);
        return 'denied';
      }
    },
    
    async subscribeToProduct(productId: string, productName: string) {
      if (!this.notificationEnabled) {
        const permission = await this.requestPermission();
        if (permission !== 'granted') return false;
      }
      
      if (!this.subscribedProducts.includes(productId)) {
        this.subscribedProducts.push(productId);
        
        // Aquí implementarías la lógica para registrar en el servidor
        // la suscripción al producto mediante una API
        
        return true;
      }
      
      return false;
    },
    
    unsubscribeFromProduct(productId: string) {
      this.subscribedProducts = this.subscribedProducts.filter(id => id !== productId);
      
      // Aquí implementarías la lógica para eliminar en el servidor
      // la suscripción al producto mediante una API
    },
    
    // Método para mostrar una notificación
    showNotification(title: string, body: string, icon?: string) {
      if (!this.notificationEnabled) return;
      
      try {
        new Notification(title, {
          body,
          icon: icon || '/favicon/favicon.ico'
        });
      } catch (error) {
        console.error('Error showing notification:', error);
      }
    }
  }
});