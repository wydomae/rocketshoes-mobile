import { NavigationActions } from 'react-navigation';

let navigator;

function setNavigator(ref) {
  navigator = ref;
}

function navigate(routeName) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
    })
  );
}

export default {
  navigate,
  setNavigator,
};
