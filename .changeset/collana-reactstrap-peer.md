---
"@collana-solutions/react-hook-form-components": major
---

The peer dependency `@neolution-ch/reactstrap` is now `@collana-solutions/reactstrap` (`^10.0.1`). The components, their API and the styles are unchanged. Apps install reactstrap themselves, so replace the old package with the new one. Your app and these components then share one copy of reactstrap:

```shell
npm uninstall @neolution-ch/reactstrap
npm install @collana-solutions/reactstrap
```

Then change the reactstrap imports in your own code:

```js
import { Button, InputGroupText } from "@collana-solutions/reactstrap";
```

The dependency `@neolution-ch/javascript-utils` is replaced by `@collana-solutions/javascript-utils` 2.6.1. It is installed with this package, so there is nothing to change for it.
