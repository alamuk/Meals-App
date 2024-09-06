# NATIVE MEALS APP
## [React Navigation: - ](https://reactnavigation.org/docs/getting-started)

###App.js set up
```
"icon": "./assets/icon.png",
"backgroundColor": "#24180f",
```



~ npm install @react-navigation/native
~ npx expo install react-native-screens react-native-safe-area-context 
In App: 
`import { NavigationContainer } from '@react-navigation/native';`
`<NavigationContainer>{/* Rest of your app code */}</NavigationContainer>`



~ expo install @react-navigation/native-stack
`import { createNativeStackNavigator } from '@react-navigation/native-stack';`


```
const Stack = createNativeStackNavigator();

<Stack.Navigator>
<Stack.Screen name="MealsCategories" component={CategoriesScreen} />
<Stack.Navigator>
```

### Also - we can use useNavigation for any component 
`import {useNavigation} from '@react-navigation/native';`

this can be used for a components nexted one. 
`const navigation = useNavigation()`





```
elevation: 4,
backgroundColor: '#fff', // back ground color is needed to see the effect of the shadow of the box. 
shadowColor: 'black',
shadowOffset: { width: 0, height: 2 },
shadowRadius: 8,
shadowOpacity: 0.25,
```


### Setting the Default Screen
When setting up a Navigator `(like <Stack.Navigator>)` and registering its screens `(via <Stack.Screen>)`, 
you can decide which screen will be shown as a default when the app starts.

Out of the box, the top-most screen `(i.e. the first child inside <Stack.Navigator>)` is used as the initial screen.

I.e., in the following example, the AllProducts screen would be shown as an initial screen when the app starts:

```
<Stack.Navigator>
<Stack.Screen name="AllProducts" component={AllProducts} /> // initial screen
<Stack.Screen name="ProductDetails" component={ProductDetails} />
</Stack.Navigator>
```

You can therefore change the initial screen by changing the `<Stack.Screen>` order. 
Alternatively, there also is an initialRouteName prop that can be set on the navigator component 
`(i.e., on <Stack.Navigator> in this case)` :

``` 
<Stack.Navigator initialRouteName="ProductDetails">
<Stack.Screen name="AllProducts" component={AllProducts} />
<Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
</Stack.Navigator>
```

Note: 
### All the components that register with navigation will have automatically `navigation` object props
### in the navigation props also has `route` object props which come with the navigation props. 

[please see the link ](https://reactnavigation.org/docs/navigation-container)


if it is not register as a screen then we can use this to get the route params: 
` import{ useRoute} from '@react-navigation/native';`
` const route = useRoute();
 route.params.categoryId = catId;`


State: 
If something change the content appearing or disappearing, then we will use useState hook.
If some like to take one page to another page or screen- we will use Navigation. 