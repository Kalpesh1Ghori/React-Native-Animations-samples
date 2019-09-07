export default (sceneProps) => {
  const { layout, position, scene } = sceneProps;
  const { index } = scene;
  const width = layout.initWidth;
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.99, index],
    outputRange: [0, 1, 1],
  });
  return { opacity, transform: [{ translateX }] };
};