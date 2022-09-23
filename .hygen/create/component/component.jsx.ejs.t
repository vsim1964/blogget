---
to: <%= absPath %>/<%= component_name %>.jsx
---
import style from './<%= component_name %>.module.css';

const <%= component_name %> = () => console.log(style);

export default <%= component_name %>;
