# formaAngular


## Linter

https://github.com/palantir/tslint

```
tslint app.ts
```

config : tslint.json


## Typescript compiler 

```
tsc
```

config : tsconfig.json

## build

package.json pour les dépendances et dépendances de dev

```
npm install -save lodash
npm install -save @types/lodash
```

@type pour la gestion des types (TS) dans les lib en JS pur.

## test Jasmine

``` 
jasmine
# prend par défaut les tests dans spec/  
# ne compile pas avant... relancer tsc avant les tests
```