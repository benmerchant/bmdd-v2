/*
 * Title: ./src/site/features/home/home.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of frameState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
// first need the html template for the homeState object
import {homeTemplate} from './home.html.js';




class homeController {
  constructor(){};


};

export const homeComponent = {
  template: homeTemplate,
  controller: homeController
};
