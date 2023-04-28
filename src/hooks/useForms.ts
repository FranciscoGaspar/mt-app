import { createStore } from 'solid-js/store';

const useForm = (fields: any) => {
  const [form, setForm] = createStore({...fields});

  const clearFields = (fieldName: string[]) => {
    fieldName.forEach((field) => {
      setForm({
        [field]: ''
      });
    });
  };

  const updateFormField = (fieldName: string) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    if (inputElement.type === 'checkbox') {
      setForm({
        [fieldName]: !!inputElement.checked
      });
    } else {
      setForm({
        [fieldName]: inputElement.value
      });
    }
  };

  return { form, setForm, updateFormField, clearFields };
};

export { useForm };