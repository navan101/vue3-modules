declare module 'vue-modules' {
    import _Vue from 'vue';
  
    export interface VueModule<T = Record<string, any>> {
      readonly name: string
      install(): void;
      // install(Vue: typeof _Vue): void;
      // install(Vue: typeof _Vue, options: T): void;
    }
  }