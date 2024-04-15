export default {
    jump: new KeyboardEvent('keydown', {key: 'Space' keyCodeÇ 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
}