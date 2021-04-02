## vue cli 拓展

### usage
```
 npm i vue-simple-cli -D
 npx vsc
```

### 新增Component

```
 npx vsc c <name>
 eg: 
    npx vsc c compA                // 新增src/components/compA.vue
    npx vsc c pages/comps/compA    // 新增src/pages/comps/compA.vue
```


### 新增Directive

```
 npx vsc d <name>
 eg: 
    npx vsc d test // 新增src/directives/test.js
```


### 新增Filter

```
 npx vsc f <name>
 eg: 
    npx vsc f test // 新增src/filters/test.js, 同时会修改filters/index.js(如果有的话)
```

### 新增System

```
 npx vsc s <name>
 eg: 
    npx vsc s newSys // 新增src/pages/newSys/**
```
