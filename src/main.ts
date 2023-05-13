import type { Ref } from "vue";
import { onMounted, onUnmounted } from "vue";

export const useOnClickOutside = (ref: Ref, callback: Function) => {
  function handleClickOutside(event: Event) {
    if (ref && ref.value && !ref.value.contains(event.target)) {
      callback();
    }
  }

  onMounted(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("mousedown", handleClickOutside);
  });
};
