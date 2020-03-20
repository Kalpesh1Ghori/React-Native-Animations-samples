

 
# React-Native Animations in Motion

Mobile app animations both platform compatible **iOS** & **Android**

 * Live demo [snack](https://snack.expo.io/@innovaterz/motion)
 
* [Slides share](https://docs.google.com/presentation/d/1Ne6xmzMd-qZ0JRObe5skSg9XQcF9wa-Fa03OZJTMDEI/present?usp=sharing)

## What is Motion?
> Motion graphics focus on giving movement to graphic design elements, illustrating a point you’re trying to make


# Animated API
* Animated focuses on declarative relationships between inputs and outputs
* Configurable transforms between elements
* Simple start/stop methods to control time-based animation execution

### Samples:

- Fade in
- Fade out
- Spring
- Rotate
- Minimize
- Maximize
- Movement

![Animated API 1](demo/animated_api_1.gif)
![Animated API 2](demo/animated_api_2.gif)


# Layout Animnations
* Automatically animates views when the next layout happens
* A common way to use it: call it before  setState


### Samples:

- Remove item from a list
- Add item to a list
- Add item to a list at position [i]

![Layout Animations](demo/layout_animation.gif)


# Transitions
Transition is an animation which 
guides users to focus on what you want

### Samples:

- Bottom transition
- Side transition
- Fade transition


![Transitions](demo/transitions.gif)



### Shared Element
* An element being shared and moved from one screen to another during transition
* Continuity between transitions
* Screen not breaks on navigation
* Focus on the content and its representation
> Actually React-Native does not support shared-element out of the box


![Shared element](demo/shared_element.gif)
