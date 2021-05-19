import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    foo: String,
  },
  setup() {
    return () => <strong>From TSX</strong>
  },
})
