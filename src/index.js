//import style from "./style.scss";
import css from './style.scss';
import template from './template.html';

class MyElement extends HTMLElement {
  
    /*
    *	When authoring custom element constructors, authors are bound by the following 
    *	conformance requirements:
    *
    *	- A parameter-less call to super() must be the first statement in the constructor
    *	  body, to establish the correct prototype chain and this value before any further
    *	  code is run.
    *
    *	- A return statement must not appear anywhere inside the constructor body, unless 
    *	  it is a simple early-return (return or return this).
    *
    *	- The constructor must not use the document.write() or document.open() methods.
    *
    *	- The element's attributes and children must not be inspected, as in the non-upgrade
    *	   case none will be present, and relying on upgrades makes the element less usable.
    *
    *	- The element must not gain any attributes or children, as this violates the 
    *	  expectations of consumers who use the createElement or createElementNS methods.
    *
    *	- In general, work should be deferred to connectedCallback as much as possible—especially
    *	  work involving fetching resources or rendering. However, note that connectedCallback
    *	  can be called more than once, so any initialization work that is truly one-time will
    *	  need a guard to prevent it from running twice.
    *
    *	- In general, the constructor should be used to set up initial state and default 
    *	  values, and to set up event listeners and possibly a shadow root.
    */
    constructor() {
      // If you define a constructor, always call super() first!
      // This is specific to CE and required by the spec.
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `<style>${css}</style>\n${template}`;
    }
    
    
    /*
    * Called every time the element is inserted into the DOM. Useful for running setup code, such  
    * as fetching resources or rendering. Generally, you should try to delay work until this time.
    */
    connectedCallback() {
    }
    
    /*
    * Called every time the element is removed from the DOM. Useful for running clean up code.
    */
    disconnectedCallback() {
    }
    
    /*
    * Called when an observed attribute has been added, removed, updated, or replaced.
    * Also called for initial values when an element is created by the parser, or upgraded.
    * Note: only attributes listed in the observedAttributes property will receive this callback.
    */
    attributeChangedCallback(attrName, oldVal, newVal)	{
      
    }
    
    static get observedAttributes() {
      return [];
    }
    
    /*
    *  Sample Prop Getters and Setters
    * 
    *  #Primative data#
    * 
    *  Always accept primitive data (strings, numbers, booleans) as either attributes or properties.
    *  Aim to keep primitive data attributes and properties in sync, reflecting from property to attribute, and vice versa.
    *  
    *  // String property
    *  get stringPropName() {
    *    return this.getAttribute(stringPropName);
    *  }
    *  
    *  set stringPropName(val) {
    *    if(val) {
    *      this.setAttribute(stringPropName, val);
    *    }
    *    else {
    *      this.removeAttribute(stringPropName);
    *    }
    *  }
    * 
    *  // Number property
    *  get numberPropName() {
    *    return Number(this.getAttribute(numberPropName));
    *  }
    *  
    *  set numberPropName(val) {
    *    if(val) {
    *      this.setAttribute(numberPropName, val);
    *    }
    *    else {
    *      this.removeAttribute(numberPropName);
    *    }
    *  }
    *  
    *  // Boolean property
    *  get booleanPropName() {
    *    return this.hasAttribute(booleanPropName);
    *  }
    *  
    *  set booleanPropName(val) {
    *    if(val) {
    *      this.setAttribute(booleanPropName, '');
    *    }
    *    else {
    *      this.removeAttribute(booleanPropName);
    *    }
    *  }
    * 
    *  #Rich data#
    *
    *  Aim to only accept rich data (objects, arrays) as properties.
    *  Do not reflect rich data properties to attributes.
    *  
    *  // Object or Array property
    *  get objectOrArrayPropName() {
    *    return this._objectOrArrayPropName;
    *  }
    *  
    *  set objectOrArrayPropName(val) {
    *    this._objectOrArrayPropName = val;
    *  }
    *  
    */
  }
  
  customElements.define('my-element', MyElement);