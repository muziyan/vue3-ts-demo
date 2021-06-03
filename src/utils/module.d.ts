import type {Ref,ComputedRef} from "vue"

export type MaybeRef<T> = Ref<T>  | ComputedRef<T> | T;


export type MaybeRefString = MaybeRef<string>;

export type MaybeRefNumber = MaybeRef<number>;

export type MaybeRefObject = MaybeRef<object>;

export type MaybeRefBool = MaybeRef<boolean>;

export type MaybeRefArray<T> = MaybeRef<Array<T>>;