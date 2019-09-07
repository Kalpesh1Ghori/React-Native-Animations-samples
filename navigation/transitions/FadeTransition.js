export default (sceneProps) => {
  const { position, scene } = sceneProps;
  const { index } = scene;
  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.5, index],
    outputRange: [0, 0.5, 1],
  });
  return { opacity };
};