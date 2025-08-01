import { registerRootComponent } from "expo";

// Import the root component from app/index instead of App.js
import App from "./app/index";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
