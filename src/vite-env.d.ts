/// <reference types="vite/client" />


// -- essentiel pour Vue 3 avec Typescript - sinon l'IDE ne reconnait pas les modules de tye .vue lors de l'import
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
