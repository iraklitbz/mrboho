<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  if (window.paypal) {
    usePaypalButton({
      fundingSource: 'paypal',
      createOrder: async (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: { value: '10.00' }
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        try {
          const details = await actions.order?.capture();
          console.log('Payment completed successfully:', details);
        } catch (error) {
          console.error('Error capturing payment:', error);
        }
      },
    });
  } else {
    console.error("PayPal script not loaded");
  }
});
</script>
<template>
  <div>
    <div id="paypal-checkout" />
  </div>
</template>
