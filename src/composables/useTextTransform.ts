import { ref } from "vue";

export function useTextTransform() {
  const text = ref("hello world");

  const makeUpperCase = () => {
    text.value = text.value.toUpperCase();
  };

  const makeCapitalized = () => {
    let thisText = [...text.value];
    thisText[0] = thisText[0].toUpperCase();
    text.value = thisText.join('');
  };

  const makeLowerCase = () => {
    text.value = text.value.toLowerCase();
  };

  return { text, makeUpperCase, makeCapitalized, makeLowerCase };
}
