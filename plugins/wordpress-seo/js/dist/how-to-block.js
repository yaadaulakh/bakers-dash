(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var o in s)e.o(s,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,s=window.wp.blockEditor,o=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"version":"22.7","name":"yoast/how-to-block","title":"Yoast How-to","description":"Create a How-to guide in an SEO-friendly way. You can only use one How-to block per post.","category":"yoast-structured-data-blocks","icon":"editor-ol","keywords":["How-to","How to","Schema","SEO","Structured Data"],"supports":{"multiple":false},"textdomain":"wordpress-seo","attributes":{"hasDuration":{"type":"boolean"},"days":{"type":"string"},"hours":{"type":"string"},"minutes":{"type":"string"},"description":{"type":"string","source":"html","selector":".schema-how-to-description"},"jsonDescription":{"type":"string"},"steps":{"type":"array"},"additionalListCssClasses":{"type":"string"},"unorderedList":{"type":"boolean"},"durationText":{"type":"string"},"defaultDurationText":{"type":"string"}},"example":{"attributes":{"steps":[{"id":"how-to-step-example-1","name":[],"text":[]},{"id":"how-to-step-example-2","name":[],"text":[]}]}},"editorScript":"yoast-seo-how-to-block","editorStyle":"yoast-seo-structured-data-blocks"}'),i=window.yoast.propTypes;var a=e.n(i);const r=window.yoast.styledComponents;var p=e.n(r);const h=window.wp.i18n,c=window.wp.a11y,l=window.lodash,u=window.wp.element,d=function(e){return class extends u.Component{render(){return(0,t.createElement)(u.Fragment,null,(0,t.createElement)(e,{...this.props})," ")}}},m=window.wp.isShallowEqual,w=window.wp.components,g=d(s.RichText.Content);class b extends u.Component{constructor(e){super(e),this.onSelectImage=this.onSelectImage.bind(this),this.onInsertStep=this.onInsertStep.bind(this),this.onRemoveStep=this.onRemoveStep.bind(this),this.onMoveStepUp=this.onMoveStepUp.bind(this),this.onMoveStepDown=this.onMoveStepDown.bind(this),this.onFocusText=this.onFocusText.bind(this),this.onFocusTitle=this.onFocusTitle.bind(this),this.onChangeTitle=this.onChangeTitle.bind(this),this.onChangeText=this.onChangeText.bind(this)}onInsertStep(){this.props.insertStep(this.props.index)}onRemoveStep(){this.props.removeStep(this.props.index)}onMoveStepUp(){this.props.isFirst||this.props.onMoveUp(this.props.index)}onMoveStepDown(){this.props.isLast||this.props.onMoveDown(this.props.index)}onFocusTitle(){this.props.onFocus(this.props.index,"name")}onFocusText(){this.props.onFocus(this.props.index,"text")}onChangeTitle(e){const{onChange:t,index:s,step:{text:o,name:n}}=this.props;t(e,o,n,o,s)}onChangeText(e){const{onChange:t,index:s,step:{text:o,name:n}}=this.props;t(n,e,n,o,s)}getMediaUploadButton(e){return(0,t.createElement)(w.Button,{className:"schema-how-to-step-button how-to-step-add-media",icon:"insert",onClick:e.open},(0,h.__)("Add image","wordpress-seo"))}getButtons(){const{step:e}=this.props;return(0,t.createElement)("div",{className:"schema-how-to-step-button-container"},!b.getImageSrc(e.text)&&(0,t.createElement)(s.MediaUpload,{onSelect:this.onSelectImage,allowedTypes:["image"],value:e.id,render:this.getMediaUploadButton}),(0,t.createElement)(w.Button,{className:"schema-how-to-step-button",icon:"trash",label:(0,h.__)("Delete step","wordpress-seo"),onClick:this.onRemoveStep}),(0,t.createElement)(w.Button,{className:"schema-how-to-step-button",icon:"insert",label:(0,h.__)("Insert step","wordpress-seo"),onClick:this.onInsertStep}))}getMover(){return(0,t.createElement)("div",{className:"schema-how-to-step-mover"},(0,t.createElement)(w.Button,{className:"editor-block-mover__control",onClick:this.onMoveStepUp,icon:"arrow-up-alt2",label:(0,h.__)("Move step up","wordpress-seo"),"aria-disabled":this.props.isFirst}),(0,t.createElement)(w.Button,{className:"editor-block-mover__control",onClick:this.onMoveStepDown,icon:"arrow-down-alt2",label:(0,h.__)("Move step down","wordpress-seo"),"aria-disabled":this.props.isLast}))}onSelectImage(e){const{index:s,step:{name:o,text:n}}=this.props;let i=n.slice();const a=(0,t.createElement)("img",{className:`wp-image-${e.id}`,alt:e.alt,src:e.url,style:"max-width:100%;"});i.push?i.push(a):i=[i,a],this.props.onChange(o,i,o,n,s)}static getImageSrc(e){if(!e||!e.filter)return!1;const t=e.filter((e=>e&&e.type&&"img"===e.type))[0];return!!t&&t.props.src}shouldComponentUpdate(e){return!(0,m.isShallowEqualObjects)(e,this.props)}static Content(e){return(0,t.createElement)("li",{className:"schema-how-to-step",id:e.id,key:e.id},(0,t.createElement)(g,{tagName:"strong",className:"schema-how-to-step-name",key:e.id+"-name",value:e.name}),(0,t.createElement)(g,{tagName:"p",className:"schema-how-to-step-text",key:e.id+"-text",value:e.text}))}render(){const{index:e,step:o,isSelected:n,isUnorderedList:i}=this.props,{id:a,name:r,text:p}=o;return(0,t.createElement)("li",{className:"schema-how-to-step",key:a},(0,t.createElement)("span",{className:"schema-how-to-step-number"},i?"•":e+1+"."),(0,t.createElement)(s.RichText,{identifier:`${a}-name`,className:"schema-how-to-step-name",tagName:"p",key:`${a}-name`,value:r,onChange:this.onChangeTitle,onFocus:this.onFocusTitle,unstableOnFocus:this.onFocusTitle,placeholder:(0,h.__)("Enter a step title","wordpress-seo"),allowedFormats:["core/italic","core/strikethrough","core/link","core/annotation"]}),(0,t.createElement)(s.RichText,{identifier:`${a}-text`,className:"schema-how-to-step-text",tagName:"p",key:`${a}-text`,value:p,onChange:this.onChangeText,onFocus:this.onFocusText,unstableOnFocus:this.onFocusText,placeholder:(0,h.__)("Enter a step description","wordpress-seo")}),n&&(0,t.createElement)("div",{className:"schema-how-to-step-controls-container"},this.getMover(),this.getButtons()))}}function S(e,t=0){return parseInt(e,10)||t}b.propTypes={index:a().number.isRequired,step:a().object.isRequired,onChange:a().func.isRequired,insertStep:a().func.isRequired,removeStep:a().func.isRequired,onFocus:a().func.isRequired,onMoveUp:a().func.isRequired,onMoveDown:a().func.isRequired,isSelected:a().bool.isRequired,isFirst:a().bool.isRequired,isLast:a().bool.isRequired,isUnorderedList:a().bool},b.defaultProps={isUnorderedList:!1};const y=d(s.RichText.Content),f=p()(w.TextControl)`
	&&& {
		margin-bottom: 32px;
	}
`;class x extends u.Component{constructor(e){super(e),this.state={focus:""},this.changeStep=this.changeStep.bind(this),this.insertStep=this.insertStep.bind(this),this.removeStep=this.removeStep.bind(this),this.swapSteps=this.swapSteps.bind(this),this.setFocus=this.setFocus.bind(this),this.addCSSClasses=this.addCSSClasses.bind(this),this.getListTypeHelp=this.getListTypeHelp.bind(this),this.toggleListType=this.toggleListType.bind(this),this.setDurationText=this.setDurationText.bind(this),this.setFocusToStep=this.setFocusToStep.bind(this),this.moveStepUp=this.moveStepUp.bind(this),this.moveStepDown=this.moveStepDown.bind(this),this.focusDescription=this.focusDescription.bind(this),this.addDuration=this.addDuration.bind(this),this.removeDuration=this.removeDuration.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this),this.onChangeDays=this.onChangeDays.bind(this),this.onChangeHours=this.onChangeHours.bind(this),this.onChangeMinutes=this.onChangeMinutes.bind(this),this.onAddStepButtonClick=this.onAddStepButtonClick.bind(this),this.daysInput=(0,u.createRef)(),this.addDurationButton=(0,u.createRef)();const t=this.getDefaultDurationText();this.setDefaultDurationText(t)}getDefaultDurationText(){const e=(0,l.get)(window,"wp.hooks.applyFilters");let t=(0,h.__)("Time needed:","wordpress-seo");return e&&(t=e("wpseo_duration_text",t)),t}setDurationText(e){this.props.setAttributes({durationText:e})}setDefaultDurationText(e){this.props.setAttributes({defaultDurationText:e})}onAddStepButtonClick(){this.insertStep(null,[],[],!1)}static generateId(e){return`${e}-${(new Date).getTime()}`}changeStep(e,t,s,o,n){const i=this.props.attributes.steps?this.props.attributes.steps.slice():[];if(n>=i.length)return;if(i[n].name!==s||i[n].text!==o)return;i[n]={id:i[n].id,name:e,text:t,jsonName:(0,u.renderToString)(e),jsonText:(0,u.renderToString)(t)};const a=b.getImageSrc(t);a&&(i[n].jsonImageSrc=a),this.props.setAttributes({steps:i})}insertStep(e=null,t=[],s=[],o=!0){const n=this.props.attributes.steps?this.props.attributes.steps.slice():[];null===e&&(e=n.length-1),n.splice(e+1,0,{id:x.generateId("how-to-step"),name:t,text:s,jsonName:"",jsonText:""}),this.props.setAttributes({steps:n}),o?setTimeout(this.setFocus.bind(this,`${e+1}:name`)):(0,c.speak)((0,h.__)("New step added","wordpress-seo"))}swapSteps(e,t){const s=this.props.attributes.steps?this.props.attributes.steps.slice():[],o=s[e];s[e]=s[t],s[t]=o,this.props.setAttributes({steps:s});const[n,i]=this.state.focus.split(":");n===`${e}`&&this.setFocus(`${t}:${i}`),n===`${t}`&&this.setFocus(`${e}:${i}`)}removeStep(e){const t=this.props.attributes.steps?this.props.attributes.steps.slice():[];t.splice(e,1),this.props.setAttributes({steps:t});let s="description";t[e]?s=`${e}:name`:t[e-1]&&(s=e-1+":text"),this.setFocus(s)}setFocus(e){e!==this.state.focus&&this.setState({focus:e})}setFocusToStep(e,t){this.setFocus(`${e}:${t}`)}moveStepUp(e){this.swapSteps(e,e-1)}moveStepDown(e){this.swapSteps(e,e+1)}getSteps(){if(!this.props.attributes.steps)return null;const[e]=this.state.focus.split(":");return this.props.attributes.steps.map(((s,o)=>(0,t.createElement)(b,{key:s.id,step:s,index:o,onChange:this.changeStep,insertStep:this.insertStep,removeStep:this.removeStep,onFocus:this.setFocusToStep,onMoveUp:this.moveStepUp,onMoveDown:this.moveStepDown,isFirst:0===o,isLast:o===this.props.attributes.steps.length-1,isSelected:e===`${o}`,isUnorderedList:this.props.attributes.unorderedList})))}formatDuration(e,t=null){if(""===e)return"";const s=e.replace(/^[0]+/,"");return""===s?0:null!==t?Math.min(Math.max(0,parseInt(s,10)),t):Math.max(0,parseInt(s,10))}static getStepsContent(e){return e?e.map((e=>(0,t.createElement)(b.Content,{...e,key:e.id}))):null}static Content(e){const{steps:s,hasDuration:o,days:n,hours:i,minutes:a,description:r,unorderedList:p,additionalListCssClasses:c,className:l,durationText:u,defaultDurationText:d}=e,m=["schema-how-to",l].filter((e=>e)).join(" "),w=["schema-how-to-steps",c].filter((e=>e)).join(" "),g=function(e){const t=function({days:e,hours:t,minutes:s}){const o=[];return 0!==e&&o.push((0,h.sprintf)(/* translators: %d expands to the number of days. */
(0,h._n)("%d day","%d days",e,"wordpress-seo"),e)),0!==t&&o.push((0,h.sprintf)(/* translators: %d expands to the number of hours. */
(0,h._n)("%d hour","%d hours",t,"wordpress-seo"),t)),0!==s&&o.push((0,h.sprintf)(/* translators: %d expands to the number of minutes. */
(0,h._n)("%d minute","%d minutes",s,"wordpress-seo"),s)),o}({days:S(e.days),hours:S(e.hours),minutes:S(e.minutes)});return 1===t.length?t[0]:2===t.length?(0,h.sprintf)(/* translators: %1$s and %2$s expand to units of time (e.g. 1 day). */
(0,h.__)("%1$s and %2$s","wordpress-seo"),...t):3===t.length?(0,h.sprintf)(/* translators: %1$s, %2$s and %3$s expand to units of time (e.g. 1 day). */
(0,h.__)("%1$s, %2$s and %3$s","wordpress-seo"),...t):""}({days:n,hours:i,minutes:a});return(0,t.createElement)("div",{className:m},o&&"string"==typeof g&&g.length>0&&(0,t.createElement)("p",{className:"schema-how-to-total-time"},(0,t.createElement)("span",{className:"schema-how-to-duration-time-text"},u||d," "),g+". "),(0,t.createElement)(y,{tagName:"p",className:"schema-how-to-description",value:r}),p?(0,t.createElement)("ul",{className:w},x.getStepsContent(s)):(0,t.createElement)("ol",{className:w},x.getStepsContent(s)))}getAddStepButton(){return(0,t.createElement)(w.Button,{icon:"insert",onClick:this.onAddStepButtonClick,className:"schema-how-to-add-step"},(0,h.__)("Add step","wordpress-seo"))}addCSSClasses(e){this.props.setAttributes({additionalListCssClasses:e})}toggleListType(e){this.props.setAttributes({unorderedList:e})}getListTypeHelp(e){return e?(0,h.__)("Showing step items as an unordered list","wordpress-seo"):(0,h.__)("Showing step items as an ordered list.","wordpress-seo")}focusDescription(){this.setFocus("description")}onChangeDescription(e){this.props.setAttributes({description:e,jsonDescription:(0,u.renderToString)(e)})}addDuration(){this.props.setAttributes({hasDuration:!0}),setTimeout((()=>this.daysInput.current.focus()))}removeDuration(){this.props.setAttributes({hasDuration:!1}),setTimeout((()=>{this.addDurationButton.current instanceof u.Component||this.addDurationButton.current.focus()}))}onChangeDays(e){const t=this.formatDuration(e.target.value);this.props.setAttributes({days:(0,l.toString)(t)})}onChangeHours(e){const t=this.formatDuration(e.target.value,23);this.props.setAttributes({hours:(0,l.toString)(t)})}onChangeMinutes(e){const t=this.formatDuration(e.target.value,59);this.props.setAttributes({minutes:(0,l.toString)(t)})}getDuration(){const{attributes:e}=this.props;return e.hasDuration?(0,t.createElement)("fieldset",{className:"schema-how-to-duration"},(0,t.createElement)("span",{className:"schema-how-to-duration-flex-container",role:"presentation"},(0,t.createElement)("legend",{className:"schema-how-to-duration-legend"},e.durationText||this.getDefaultDurationText()),(0,t.createElement)("span",{className:"schema-how-to-duration-time-input"},(0,t.createElement)("label",{htmlFor:"schema-how-to-duration-days",className:"screen-reader-text"},/* translators: Hidden accessibility text. */
(0,h.__)("days","wordpress-seo")),(0,t.createElement)("input",{id:"schema-how-to-duration-days",className:"schema-how-to-duration-input",type:"number",value:e.days,onChange:this.onChangeDays,placeholder:"DD",ref:this.daysInput}),(0,t.createElement)("label",{htmlFor:"schema-how-to-duration-hours",className:"screen-reader-text"},(0,h.__)("hours","wordpress-seo")),(0,t.createElement)("input",{id:"schema-how-to-duration-hours",className:"schema-how-to-duration-input",type:"number",value:e.hours,onChange:this.onChangeHours,placeholder:"HH"}),(0,t.createElement)("span",{"aria-hidden":"true"},":"),(0,t.createElement)("label",{htmlFor:"schema-how-to-duration-minutes",className:"screen-reader-text"},(0,h.__)("minutes","wordpress-seo")),(0,t.createElement)("input",{id:"schema-how-to-duration-minutes",className:"schema-how-to-duration-input",type:"number",value:e.minutes,onChange:this.onChangeMinutes,placeholder:"MM"}),(0,t.createElement)(w.Button,{className:"schema-how-to-duration-delete-button",icon:"trash",label:(0,h.__)("Delete total time","wordpress-seo"),onClick:this.removeDuration})))):(0,t.createElement)(w.Button,{onClick:this.addDuration,className:"schema-how-to-duration-button",ref:this.addDurationButton,icon:"insert"},(0,h.__)("Add total time","wordpress-seo"))}getSidebar(e,o,n){return n===this.getDefaultDurationText()&&(n=""),(0,t.createElement)(s.InspectorControls,null,(0,t.createElement)(w.PanelBody,{title:(0,h.__)("Settings","wordpress-seo"),className:"blocks-font-size"},(0,t.createElement)(f,{label:(0,h.__)("CSS class(es) to apply to the steps","wordpress-seo"),value:o,onChange:this.addCSSClasses,help:(0,h.__)("Optional. This can give you better control over the styling of the steps.","wordpress-seo")}),(0,t.createElement)(f,{label:(0,h.__)("Describe the duration of the instruction:","wordpress-seo"),value:n,onChange:this.setDurationText,help:(0,h.__)("Optional. Customize how you want to describe the duration of the instruction","wordpress-seo"),placeholder:this.getDefaultDurationText()}),(0,t.createElement)(w.ToggleControl,{label:(0,h.__)("Unordered list","wordpress-seo"),checked:e||!1,onChange:this.toggleListType,help:this.getListTypeHelp})))}render(){const{attributes:e,className:o}=this.props,n=["schema-how-to",o].filter((e=>e)).join(" "),i=["schema-how-to-steps",e.additionalListCssClasses].filter((e=>e)).join(" ");return(0,t.createElement)("div",{className:n},this.getDuration(),(0,t.createElement)(s.RichText,{identifier:"description",tagName:"p",className:"schema-how-to-description",value:e.description,onChange:this.onChangeDescription,onFocus:this.focusDescription,unstableOnFocus:this.focusDescription,placeholder:(0,h.__)("Enter a description","wordpress-seo")}),(0,t.createElement)("ul",{className:i},this.getSteps()),(0,t.createElement)("div",{className:"schema-how-to-buttons"},this.getAddStepButton()),this.getSidebar(e.unorderedList,e.additionalListCssClasses,e.durationText))}}function C(e,t=0){return parseInt(e,10)||t}function v(e){const t=function({days:e,hours:t,minutes:s}){const o=[];return 0!==e&&o.push((0,h.sprintf)(/* translators: %d expands to the number of days. */
(0,h._n)("%d day","%d days",e,"wordpress-seo"),e)),0!==t&&o.push((0,h.sprintf)(/* translators: %d expands to the number of hours. */
(0,h._n)("%d hour","%d hours",t,"wordpress-seo"),t)),0!==s&&o.push((0,h.sprintf)(/* translators: %d expands to the number of minutes. */
(0,h._n)("%d minute","%d minutes",s,"wordpress-seo"),s)),o}({days:C(e.days),hours:C(e.hours),minutes:C(e.minutes)});return 1===t.length?t[0]:2===t.length?(0,h.sprintf)(/* translators: %1$s and %2$s expand to units of time (e.g. 1 day). */
(0,h.__)("%1$s and %2$s","wordpress-seo"),...t):3===t.length?(0,h.sprintf)(/* translators: %1$s, %2$s and %3$s expand to units of time (e.g. 1 day). */
(0,h.__)("%1$s, %2$s and %3$s","wordpress-seo"),...t):""}x.propTypes={attributes:a().object.isRequired,setAttributes:a().func.isRequired,className:a().string},x.defaultProps={className:""};const D=e=>(0,t.createElement)("li",{className:"schema-how-to-step",key:e.id},(0,t.createElement)("strong",{className:"schema-how-to-step-name",key:e.id+"-name"},e.name)," ",(0,t.createElement)("p",{className:"schema-how-to-step-text",key:e.id+"-text"},e.text)," ");function E(e){let{steps:s}=e.attributes;const{hasDuration:o,days:n,hours:i,minutes:a,description:r,unorderedList:p,additionalListCssClasses:c,className:l}=e.attributes;s=s?s.map((e=>(0,t.createElement)(D,{...e,key:e.id}))):null;const u=["schema-how-to",l].filter((e=>e)).join(" "),d=["schema-how-to-steps",c].filter((e=>e)).join(" "),m=v({days:n,hours:i,minutes:a});return(0,t.createElement)("div",{className:u},o&&"string"==typeof m&&m.length>0&&(0,t.createElement)("p",{className:"schema-how-to-total-time"},(0,h.__)("Time needed:","wordpress-seo")," ",m+". "),(0,t.createElement)("p",{className:"schema-how-to-description"},r)," ",p?(0,t.createElement)("ul",{className:d},s):(0,t.createElement)("ol",{className:d},s))}function T(e){return(0,t.createElement)("li",{className:"schema-how-to-step",key:e.id},(0,t.createElement)("strong",{className:"schema-how-to-step-name",key:e.id+"-name"},e.name)," ",(0,t.createElement)("p",{className:"schema-how-to-step-text",key:e.id+"-text"},e.text)," ")}function _(e){const{steps:s,hasDuration:o,days:n,hours:i,minutes:a,description:r,unorderedList:p,additionalListCssClasses:h,className:c,durationText:l,defaultDurationText:u}=e.attributes,d=["schema-how-to",c].filter((e=>e)).join(" "),m=["schema-how-to-steps",h].filter((e=>e)).join(" "),w=v({days:n,hours:i,minutes:a});let g=[];return s&&(g=s.map((e=>(0,t.createElement)(T,{...e,key:e.id})))),(0,t.createElement)("div",{className:d},o&&"string"==typeof w&&w.length>0&&(0,t.createElement)("p",{className:"schema-how-to-total-time"},(0,t.createElement)("span",{className:"schema-how-to-duration-time-text"},l||u," "),w+". "),(0,t.createElement)("p",{className:"schema-how-to-description"},r)," ",p?(0,t.createElement)("ul",{className:m},g):(0,t.createElement)("ol",{className:m},g))}E.propTypes={attributes:a().object},_.propTypes={attributes:a().object.isRequired};const N={v8_2:E,v11_4:_};(0,o.registerBlockType)(n,{edit:({attributes:e,setAttributes:o,className:n})=>{const i=(0,s.useBlockProps)();return e.steps&&0!==e.steps.length||(e.steps=[{id:x.generateId("how-to-step"),name:[],text:[]}]),(0,t.createElement)("div",{...i},(0,t.createElement)(x,{attributes:e,setAttributes:o,className:n}))},save:({attributes:e})=>{const o=s.useBlockProps.save(e);return(0,t.createElement)(x.Content,{...o})},deprecated:[{attributes:n.attributes,save:N.v11_4},{attributes:n.attributes,save:N.v8_2}]})})();