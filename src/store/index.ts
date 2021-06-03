// noinspection TypeScriptValidateTypes

import {createStore, StoreOptions,storeKey} from "vuex";

// const files = import.meta.globEager("./modules/**/*.ts")
//
// const modules : ModuleTree<object> = {};
//
// Object.keys(files)?.map((key:string) =>{
//     let reg: RegExp = /\w*.ts/g
//     let newKey:string = key;
//     newKey = newKey.replace("./modules/","").replace(".ts", "")
//     // @ts-ignore
//     modules[newKey] = files[key].default
// })

import user from "./modules/user";

export 

const store = createStore<StoreOptions<IDBObjectStore>>({
    modules:{
        user:user
    }
});

export default store;