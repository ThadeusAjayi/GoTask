import * as React from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

export const _navigator = React.createRef();

function navigate(name, params) {
	_navigator.current?.navigate(name, params);
}

function reset(route, params) {
	_navigator.current?.dispatch({
		...StackActions.replace(route, params)
	});
}

function pop() {
	const popAction = StackActions.pop(1);
	_navigator.current?.dispatch(popAction);
}

function popToTop(){
  _navigator.current?.dispatch(StackActions.popToTop());
}

function restack(routes = [], index = 0) {
	_navigator.current?.dispatch(CommonActions.reset({
		index: index,
		routes: routes
	  }));
}

export default {
  navigate,
  reset,
  pop,
  popToTop,
  restack
};
