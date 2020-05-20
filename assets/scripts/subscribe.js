
const successMessage = document.querySelector('.formSuccess');
const subscriptionForm = document.querySelector('.subscribe');

function onSubscribe() {
	subscriptionForm.style['display'] = 'none';
	successMessage.style['display'] = 'unset';
}