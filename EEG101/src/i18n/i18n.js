import I18n from 'react-native-i18n';
import en from './locales/en';
import fr from './locales/fr';
import es from './locales/es';

I18n.fallbacks = true;

I18n.translations = {
  en,
};


export default I18n;
