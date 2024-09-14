import{a as v}from"./chunk-75PIWSVV.js";import{a as n,b as g}from"./chunk-ZTSP2PIJ.js";import{a as o,b as y}from"./chunk-PG6OKG6X.js";import{c as m}from"./chunk-FCVI7UZU.js";import{c as i,f as s,g as p,n as u,o as f,p as b}from"./chunk-TXMQCKG7.js";import{a,d as r}from"./chunk-F2UFI3JK.js";function l(d,t=!0){return t&&getComputedStyle(d).getPropertyValue("direction").trim()==="rtl"}var w=m(g(f)),e=class extends w{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[n].form}get labels(){return this[n].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=l(this,this.flipIconInRtl),!1||this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){let t=this.href?o`div`:o`button`,{ariaLabel:h,ariaHasPopup:x,ariaExpanded:_}=this,$=h&&this.ariaLabelSelected,I=this.toggle?this.selected:r,c=r;return this.href||(c=$&&this.selected?this.ariaLabelSelected:h),y`<${t}
        class="icon-button ${b(this.getRenderClasses())}"
        id="button"
        aria-label="${c||r}"
        aria-haspopup="${!this.href&&x||r}"
        aria-expanded="${!this.href&&_||r}"
        aria-pressed="${I}"
        aria-disabled=${!this.href&&this.softDisabled||r}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?r:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():r}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${t}>`}renderLink(){let{ariaLabel:t}=this;return a`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||r}"
        aria-label="${t||r}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return a`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return a`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return a`<span class="touch"></span>`}renderFocusRing(){return a`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){let t=!this.href&&(this.disabled||this.softDisabled);return a`<md-ripple
      for=${this.href?"link":r}
      ?disabled="${t}"></md-ripple>`}connectedCallback(){this.flipIcon=l(this,this.flipIconInRtl),super.connectedCallback()}handleClick(t){if(!this.href&&this.softDisabled){t.stopImmediatePropagation(),t.preventDefault();return}}async handleClickOnChild(t){await 0,!(!this.toggle||this.disabled||this.softDisabled||t.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}};v(e);e.formAssociated=!0;e.shadowRootOptions={mode:"open",delegatesFocus:!0};i([s({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);i([s({type:Boolean,attribute:"soft-disabled",reflect:!0})],e.prototype,"softDisabled",void 0);i([s({type:Boolean,attribute:"flip-icon-in-rtl"})],e.prototype,"flipIconInRtl",void 0);i([s()],e.prototype,"href",void 0);i([s()],e.prototype,"target",void 0);i([s({attribute:"aria-label-selected"})],e.prototype,"ariaLabelSelected",void 0);i([s({type:Boolean})],e.prototype,"toggle",void 0);i([s({type:Boolean,reflect:!0})],e.prototype,"selected",void 0);i([s()],e.prototype,"type",void 0);i([s({reflect:!0})],e.prototype,"value",void 0);i([p()],e.prototype,"flipIcon",void 0);var H=u`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`;export{e as a,H as b};
